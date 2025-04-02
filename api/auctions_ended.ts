import axios from 'axios';

// fetch ended auctions using hypixel api v2 (past 1 minute, api update every 1 minute)

export const fetchEndedAuctions = async () => {
    try {
        const response = await axios.get<{ auctions: any[] }>("https://api.hypixel.net/skyblock/auctions_ended"); // auctions_ended endpoint does not require an api key
        if (response.status !== 200) {
            throw new Error(`Error fetching auctions: ${response.statusText}`);
        }
    
        const auctions = response.data.auctions;
    
        // Filter auctions that ended in the last minute
        const endedAuctions = auctions.filter((auction: any) => {
        const endTime = auction.endTime;
        const currentTime = Date.now();
        return endTime >= currentTime - 60000 && endTime <= currentTime;
        });
    
        return endedAuctions;
    } catch (error) {
        console.error('Error fetching ended auctions:', error);
        throw error;
    }
    }