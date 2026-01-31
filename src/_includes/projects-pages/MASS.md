# Multi-Agent Spectrum Sharing (MASS)

## Background:
As radio spectrum becomes increasingly in demand, the need for optimized spectrum usage/sharing has grown in complexity and urgency. With the growth in digital radio technologies, concepts for cognitive radar have developed where a radar learns from its environment and adapts its waveform to avoid collisions and maximize clear transmission. Current approaches mostly involve the sense-and-avoid (SAA) approach where the agent bases their current frequency and bandwidth on the widest available bandwidth from the previous timestep.

## Motivation:
SAA leaves much room for improvement and is not ideal in all circumstances. It also has the potential to lead to catastrophic collisions when more than one such radar uses the same approach if they come in at the same time.

## Proposed Solution:
Machine learning algorithms such as PPO and DQN have shown promising results as SAA alternatives for cognitive radar that actually learn from their environment. These approaches have not been adequately tested in multi-agent environments where other learning agents may be present, so this is one area to explore. As more cognitive agents are added to the problem, it is likely that meta-learning and opponent shaping approaches such as model-free opponent shaping (M-FOS) may demonstrate superiority to basic reinforcement-learning methods.

![Alt text](/assets/project_MASS/MASS_1.png)

(Simulated Spectrum environment with PPO, DQN, and SAA agents active)

![Alt text](/assets/project_MASS/MASS_2.png)

(Average reward per cognitive agent over time)

