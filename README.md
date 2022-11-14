# Tron Mushroom

## Inspiration
Currently, many users are leaving the blockchain with Crypto Winter. Blockchain is a structure that stabilizes as more users increase. In this situation, the blockchain industry seems to have judged that games are relatively easy to attract users. We want to make a game to gather Tron's users.

## What it does
The Mushroom Project is a P2E game where you can grow mushrooms, make them NFTs, sell them, or stock them to get Token. The game can be played with four elements: mushrooms, spores, farms, and thief.

**Mushroom Project Milestones**
- Create our own Tron-friendly wallet
- Mushroom Book NFT
- Season 1 Adult Mushroom Card NFT Image Voting
- Update mushroom species
- Game of steal and defense against thieves and farms
- Continuous mushroom grade probability adjustment to balance

## How we built it
There are a total of 5 areas in our game.

**First, Growing Farm.**

Growing Farm is to grow spore NFTs and make adult mushroom NFTs. In order to grow, watering, cleaning, sunlight, etc. are necessary. When a spore NFT becomes an adult, it can evolve into a mushroom NFT, and the grade of the mushroom NFT is randomly determined according to the grade of the spore NFT.

**Second, the Staking area.**

In the staking area, graded mushroom NFTs can be staking. The higher the rating, the higher the interest rate, and Mush Token (Main Token) is received as interest. After the minimum staking time has passed, you can unstake and receive rewards at the same time.

**Third, the steal area.**

In the steal area, you can steal some of the interest that others are receiving while staking. If you first decide what you want to steal and set the amount you want to steal, you can steal it with a certain probability. The staking entity can lower the steal success rate by issuing poisonous mushroom NFTs.

**Fourth, inventory.**

In the inventory, you can check the information of your NFTs and Main Token. In addition, by decomposing mushroom NFTs into spore NFTs, high-grade spore NFTs can be obtained with a low probability.

**Fifth, market place.**

In the market place, you can sell your harvested mushroom NFTs or buy other people's mushroom NFTs. Decompose to obtain high-grade spore NFTs, or purchase to create your own mushroom encyclopedia.

## Challenges we ran into
Adjusting the liquidity of the token was not easy. We have noticed that many games eventually depreciate in game currency. So, we tried to create a tokennomics in which the value of game currency is maintained. 

However, adjusting the supply was very complicated due to many variables. If we take the Ponzi structure, it can be easily solved, but it is not a fundamental solution, and I think it is an obvious scam. We were wary of becoming a Ponzi structure.
Also, there is burning tokens as a way to adjust the supply. We put a lot of thought into making this behavior convincing to users.

## Accomplishments that we're proud of
In the end, we created a structure that maintains the liquidity of tokens. First, we set the supply differently for each season. As a reward for staking, if you stake high-grade mushroom NFTs, you can receive many rewards. However, the more mushroom NFTs in the season, the less rewards you can receive. And when a new season mushroom NFT appears, people naturally buy the new season mushroom NFT to receive high interest.

In addition, a high risk, high return structure was created through the steal function. A thief can steal a certain percentage of the other person's interest, but with a certain probability, they can lose their own money. Through this, I made the structure in which tokens are naturally burned interesting.

## What we learned
1. How to stake and how to actually implement it
2. contract to contract interaction & Upgradable Contract
3. Token liquidity control
4. Understanding the Tron Ecosystem

## What's next for Mushroom 
UI/UX Update
Since it is not a structure that completely adjusts liquidity, it must be developed in the future.
There are also a lot of things that can be upgraded, such as enhancements, experience points, and weather APIs.
