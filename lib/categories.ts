// Extract categories from report titles and content
export function extractCategories(title: string, content: string): string[] {
  const categories: string[] = [];
  const titleLower = title.toLowerCase();
  const contentLower = content.toLowerCase();

  // Category keywords mapping
  const categoryKeywords = {
    'DeFi': ['defi', 'decentralized finance', 'lending', 'borrowing', 'liquidity', 'amm', 'dex', 'uniswap', 'aave', 'compound', 'maker'],
    'NFTs': ['nft', 'non-fungible', 'bayc', 'bored ape', 'opensea', 'marketplace', 'collectible', 'art', 'pfp'],
    'Layer 2': ['layer 2', 'l2', 'scaling', 'rollup', 'optimism', 'arbitrum', 'polygon', 'zksync'],
    'Tokenomics': ['tokenomics', 'token', 'supply', 'emission', 'vesting', 'allocation', 'burn'],
    'Market Analysis': ['market', 'price', 'prediction', 'cycle', 'bull', 'bear', 'analysis', 'forecast'],
    'Solana': ['solana', '$sol', 'spl'],
    'Ethereum': ['ethereum', '$eth', 'erc-20', 'erc20', 'evm'],
    'Bitcoin': ['bitcoin', '$btc', 'btc'],
    'Staking': ['staking', 'stake', 'validator', 'liquid staking'],
    'Gaming': ['gaming', 'game', 'play to earn', 'p2e'],
    'AI': ['ai', 'artificial intelligence', 'machine learning', 'ml'],
    'DePIN': ['depin', 'physical infrastructure'],
    'Stablecoins': ['stablecoin', 'usdc', 'usdt', 'dai'],
    'Real World Assets': ['rwa', 'real world asset', 'tokenization'],
  };

  Object.entries(categoryKeywords).forEach(([category, keywords]) => {
    const hasKeyword = keywords.some(keyword =>
      titleLower.includes(keyword) || contentLower.includes(keyword)
    );
    if (hasKeyword) {
      categories.push(category);
    }
  });

  // Remove duplicates and return
  return Array.from(new Set(categories));
}

export function getAllCategories(reports: Array<{ categories?: string[] }>): string[] {
  const allCategories = reports.flatMap(report => report.categories || []);
  return Array.from(new Set(allCategories)).sort();
}

// Calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Extract table of contents from markdown headings
export function extractTableOfContents(content: string): Array<{ id: string; text: string; level: number }> {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const toc: Array<{ id: string; text: string; level: number }> = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/[*_`]/g, '');
    const id = text.toLowerCase().replace(/[^\w]+/g, '-');

    toc.push({ id, text, level });
  }

  return toc;
}
