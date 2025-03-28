import { Router } from 'express';
import fetch from 'node-fetch';

const router = Router();

router.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

router.get('/github/repos', async (req, res) => {
  try {
    const response = await fetch('https://api.github.com/users/yurivf/repos?sort=stars&per_page=3', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        ...(process.env.GITHUB_TOKEN && {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`
        })
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar repos:', error);
    res.status(500).json({ error: 'Erro ao buscar repositórios do GitHub' });
  }
});

export default router;