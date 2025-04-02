import { fetchEndedAuctions } from '../api/auctions_ended';
import { promises as fs } from 'fs';

async function processAuctions() {
    try {
        // Fetch ended auctions
        const endedAuctions = await fetchEndedAuctions();

        // Write the auctions to a JSON file
        await fs.writeFile('auctions_ended.json', JSON.stringify(endedAuctions, null, 2));

        console.log('Ended auctions have been written to auctions_ended.json');
    } catch (error) {
        console.error('Error processing auctions:', error);
    }
}

processAuctions();