import { useState } from 'react';
import { personal, skills, projects, experience } from '../data.js';

const MODES = [
  { id: 'bio', label: '✦ Write Bio', prompt: 'Write a compelling, concise professional bio for my portfolio.' },
  { id: 'cover', label: '✉ Cover Letter', prompt: 'Help me write a cover letter for a UX design position.' },
  { id: 'project', label: '📋 Project Description', prompt: 'Write a polished project description for my portfolio.' },
  { id: 'skills', label: '⚡ Highlight Skills', prompt: 'Based on my skills, what are my strongest selling points to employers?' },
];

function buildContext() {
  return `
You are helping ${personal.name}, a ${personal.title} based in ${personal.location}.

Their bio: ${personal.bio}

Their skills: ${skills.map(s => s.name).join(', ')}

Their projects: ${projects.map(p => `"${p.title}" (${p.subtitle}) — ${p.description}`).join('\n')}

Their experience: ${experience.map(e => `${e.role} at ${e.company} (${e.period})`).join(', ')}

Write professional, warm, and confident copy. Keep it human — not corporate. Avoid clichés like "passionate about" or "results-driven". Be concise and compelling.
  `.trim();
}

export default function AIAssistant() {
  const [activeMode, setActiveMode] = useState(MODES[0]);
  const [customPrompt, setCustomPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  async function generate() {
    const userPrompt = customPrompt.trim() || activeMode.prompt;
    setLoading(true);
    setOutput('');

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: buildContext(),
          messages: [{ role: 'user', content: userPrompt }],
        }),
      });

      const data = await res.json();
      const text = data.content?.find(b => b.type === 'text')?.text || 'Something went wrong. Please try again.';

      // Typewriter effect
      let i = 0;
      const interval = setInterval(() => {
        setOutput(text.slice(0, i));
        i += 4;
        if (i > text.length) {
          setOutput(text);
          clearInterval(interval);
        }
      }, 10);
    } catch {
      setOutput('Error connecting to AI. Please check your setup.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="ai" className="ai-section">
      <div className="container">
        <p className="section-label">AI-Powered</p>
        <h2 className="section-title">Your Personal<br />Portfolio Assistant</h2>
        <p className="section-desc">
          Let AI help you craft compelling copy — bios, cover letters, project descriptions — all tailored to your work and voice.
        </p>

        <div className="ai-card">
          <div className="ai-tabs">
            {MODES.map(mode => (
              <button
                key={mode.id}
                className={`ai-tab ${activeMode.id === mode.id ? 'active' : ''}`}
                onClick={() => { setActiveMode(mode); setCustomPrompt(''); }}
              >
                {mode.label}
              </button>
            ))}
          </div>

          <textarea
            className="ai-prompt-area"
            placeholder={activeMode.prompt + '\n\n(Edit this prompt or type your own...)'}
            value={customPrompt}
            onChange={e => setCustomPrompt(e.target.value)}
          />

          <button
            className="ai-generate-btn"
            onClick={generate}
            disabled={loading}
          >
            {loading ? '✦ Generating...' : '✦ Generate'}
          </button>

          {(output || loading) && (
            <div className="ai-output">
              {output}
              {loading && <span className="ai-cursor" />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
