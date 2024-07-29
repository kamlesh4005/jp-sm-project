// src/services/event.service.js
const getEventDetails = async (eventId) => {
    // Replace the following line with your actual logic to fetch event details
    // This might involve querying a database or another service
    return {
        "eventType": {
            "id": "4",
            "name": "Cricket"
        },
        "competition": {
            "id": "9992899",
            "name": "International Twenty20 Matches",
            "provider": "BETFAIR"
        },
        "event": {
            "id": "33448172",
            "name": "Sri Lanka v India",
            "countryCode": "GB",
            "venue": null,
            "openDate": "2024-07-28T13:30:00Z"
        },
        "catalogues": [
            {
                "marketId": "1.231149272",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "MATCH_ODDS",
                "bettingType": "ODDS",
                "marketName": "Match Odds",
                "provider": "BETFAIR",
                "marketCondition": {
                    "marketId": "1.231149272",
                    "betLock": false,
                    "minBet": 1,
                    "maxBet": 0,
                    "maxProfit": 1,
                    "betDelay": 5,
                    "mtp": 15,
                    "allowUnmatchBet": false,
                    "potLimit": 0,
                    "volume": 0
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 7337,
                        "name": "Sri Lanka",
                        "sortPriority": 0,
                        "metadata": {
                            "runnerId": "7337"
                        }
                    },
                    {
                        "id": 414464,
                        "name": "India",
                        "sortPriority": 0,
                        "metadata": {
                            "runnerId": "414464"
                        }
                    }
                ]
            },
            {
                "marketId": "43375779",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BOOKMAKER",
                "bettingType": "BOOKMAKER",
                "marketName": "Bookmaker 0 Commission",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375779",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 70000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487599,
                        "name": "Sri Lanka",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487600,
                        "name": "India",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375780",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BOOKMAKER",
                "bettingType": "BOOKMAKER",
                "marketName": "To Win The Toss",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375780",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 2000000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487601,
                        "name": "Sri Lanka",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487602,
                        "name": "India",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375788",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 1 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375788",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487624,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487625,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375791",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 2 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375791",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487632,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487633,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375793",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 3 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375793",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487637,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487638,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375794",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 4 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375794",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487639,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487640,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375795",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 5 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375795",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487641,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487642,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375798",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 6 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375798",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487649,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487650,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375801",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 7 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375801",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487657,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487658,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375803",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 8 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375803",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487662,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487663,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375806",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 9 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375806",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487670,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487671,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375807",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 10 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375807",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487672,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487673,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375808",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 11 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375808",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487674,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487675,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375810",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 12 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375810",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487679,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487680,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375813",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 13 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375813",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487687,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487688,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375815",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 14 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375815",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487692,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487693,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375817",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 15 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375817",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487697,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487698,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375829",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 16 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375829",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487732,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487733,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375839",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 17 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375839",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487761,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487762,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375843",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 18 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375843",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487772,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487773,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375847",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 19 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375847",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487783,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487784,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375853",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning Lambi ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375853",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487800,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487801,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375858",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "2nd Inning 1 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375858",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487814,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487815,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375859",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "2nd Inning 2 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375859",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487816,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487817,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375860",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "2nd Inning 3 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375860",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487818,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487819,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375861",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "2nd Inning 4 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375861",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487820,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487821,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375862",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "2nd Inning 5 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375862",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487822,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487823,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375863",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "2nd Inning 6 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375863",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487824,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487825,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375864",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "2nd Inning 7 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375864",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487826,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487827,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375865",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "2nd Inning 8 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375865",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487828,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487829,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375866",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "2nd Inning 9 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375866",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487830,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487831,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375867",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "2nd Inning 10 Over Total ODD EVEN ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375867",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487832,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487833,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375869",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 6 Over Lottery ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375869",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487836,
                        "name": "0",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487837,
                        "name": "1",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487838,
                        "name": "2",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487839,
                        "name": "3",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487840,
                        "name": "4",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487841,
                        "name": "5",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487842,
                        "name": "6",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487843,
                        "name": "7",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487844,
                        "name": "8",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487845,
                        "name": "9",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375870",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 10 Over Lottery ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375870",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487846,
                        "name": "0",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487847,
                        "name": "1",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487848,
                        "name": "2",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487849,
                        "name": "3",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487850,
                        "name": "4",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487851,
                        "name": "5",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487852,
                        "name": "6",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487853,
                        "name": "7",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487854,
                        "name": "8",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487855,
                        "name": "9",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375871",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning 15 Over Lottery ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375871",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487856,
                        "name": "0",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487857,
                        "name": "1",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487858,
                        "name": "2",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487859,
                        "name": "3",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487860,
                        "name": "4",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487861,
                        "name": "5",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487862,
                        "name": "6",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487863,
                        "name": "7",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487864,
                        "name": "8",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487865,
                        "name": "9",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375872",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "1st Inning Lambi Lottery ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375872",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487866,
                        "name": "0",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487867,
                        "name": "1",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487868,
                        "name": "2",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487869,
                        "name": "3",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487870,
                        "name": "4",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487871,
                        "name": "5",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487872,
                        "name": "6",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487873,
                        "name": "7",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487874,
                        "name": "8",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487875,
                        "name": "9",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375873",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "2nd Inning 6 Over Lottery ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375873",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487876,
                        "name": "0",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487877,
                        "name": "1",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487878,
                        "name": "2",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487879,
                        "name": "3",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487880,
                        "name": "4",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487881,
                        "name": "5",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487882,
                        "name": "6",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487883,
                        "name": "7",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487884,
                        "name": "8",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487885,
                        "name": "9",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375874",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "2nd Inning 10 Over Lottery ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375874",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487886,
                        "name": "0",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487887,
                        "name": "1",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487888,
                        "name": "2",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487889,
                        "name": "3",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487890,
                        "name": "4",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487891,
                        "name": "5",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487892,
                        "name": "6",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487893,
                        "name": "7",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487894,
                        "name": "8",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487895,
                        "name": "9",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375875",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 1 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375875",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487896,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487897,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375876",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 2 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375876",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487898,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487899,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375877",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 3 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375877",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487900,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487901,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375878",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 4 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375878",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487902,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487903,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375879",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 5 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375879",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487904,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487905,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375880",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 6 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375880",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487906,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487907,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375881",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 7 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375881",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487908,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487909,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375882",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 8 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375882",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487910,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487911,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375883",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 9 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375883",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487912,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487913,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375884",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 10 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375884",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487914,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487915,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375885",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 11 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375885",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487916,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487917,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375886",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 12 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375886",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487918,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487919,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375887",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 13 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375887",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487920,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487921,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375891",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 14 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375891",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487931,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487932,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375892",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 15 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375892",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487933,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487934,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375894",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 16 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375894",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487938,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487939,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375896",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 17 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375896",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487943,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487944,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375897",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 18 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375897",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487945,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487946,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375898",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 19 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375898",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487947,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487948,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375899",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL Lambi ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375899",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487949,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487950,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375900",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 1 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375900",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487951,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487952,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375905",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 2 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375905",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487965,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487966,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375906",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 3 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375906",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487967,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487968,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375907",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 4 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375907",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487969,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487970,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375908",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 5 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375908",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487971,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487972,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375909",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 6 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375909",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487973,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487974,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375911",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 7 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375911",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487978,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487979,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375913",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 8 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375913",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487983,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487984,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375917",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 9 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375917",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487993,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487994,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375918",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 10 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375918",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45487995,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45487996,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375920",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 11 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375920",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488000,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488001,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375921",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 12 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375921",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488002,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488003,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375930",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 13 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375930",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488027,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488028,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375933",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 14 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375933",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488035,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488036,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375935",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 15 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375935",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488040,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488041,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375937",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 16 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375937",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488045,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488046,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375939",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 17 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375939",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488050,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488051,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375942",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 18 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375942",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488058,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488059,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375944",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 19 Over Total ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375944",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488063,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488064,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375947",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND Lambi ODD EVEN",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375947",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488071,
                        "name": "ODD",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488072,
                        "name": "EVEN",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375957",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 6 Over Lottery",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375957",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488100,
                        "name": "0",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488101,
                        "name": "1",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488102,
                        "name": "2",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488103,
                        "name": "3",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488104,
                        "name": "4",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488105,
                        "name": "5",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488106,
                        "name": "6",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488107,
                        "name": "7",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488108,
                        "name": "8",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488109,
                        "name": "9",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375958",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 10 Over Lottery",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375958",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488110,
                        "name": "0",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488111,
                        "name": "1",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488112,
                        "name": "2",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488113,
                        "name": "3",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488114,
                        "name": "4",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488115,
                        "name": "5",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488116,
                        "name": "6",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488117,
                        "name": "7",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488118,
                        "name": "8",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488119,
                        "name": "9",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375959",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL 15 Over Lottery",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375959",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488120,
                        "name": "0",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488121,
                        "name": "1",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488122,
                        "name": "2",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488123,
                        "name": "3",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488124,
                        "name": "4",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488125,
                        "name": "5",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488126,
                        "name": "6",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488127,
                        "name": "7",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488128,
                        "name": "8",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488129,
                        "name": "9",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375961",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "SL Lambi Lottery",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375961",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488133,
                        "name": "0",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488134,
                        "name": "1",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488135,
                        "name": "2",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488136,
                        "name": "3",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488137,
                        "name": "4",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488138,
                        "name": "5",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488139,
                        "name": "6",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488140,
                        "name": "7",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488141,
                        "name": "8",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488142,
                        "name": "9",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375963",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 6 Over Lottery",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375963",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488146,
                        "name": "0",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488147,
                        "name": "1",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488148,
                        "name": "2",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488149,
                        "name": "3",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488150,
                        "name": "4",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488151,
                        "name": "5",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488152,
                        "name": "6",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488153,
                        "name": "7",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488154,
                        "name": "8",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488155,
                        "name": "9",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375965",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 10 Over Lottery",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375965",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488159,
                        "name": "0",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488160,
                        "name": "1",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488161,
                        "name": "2",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488162,
                        "name": "3",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488163,
                        "name": "4",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488164,
                        "name": "5",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488165,
                        "name": "6",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488166,
                        "name": "7",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488167,
                        "name": "8",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488168,
                        "name": "9",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375969",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND 15 Over Lottery",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375969",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488178,
                        "name": "0",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488179,
                        "name": "1",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488180,
                        "name": "2",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488181,
                        "name": "3",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488182,
                        "name": "4",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488183,
                        "name": "5",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488184,
                        "name": "6",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488185,
                        "name": "7",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488186,
                        "name": "8",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488187,
                        "name": "9",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43375971",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "WINNING_ODDS",
                "bettingType": "ODDS",
                "marketName": "IND Lambi Lottery",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43375971",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 0,
                    "allowUnmatchBet": true,
                    "potLimit": 150000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488191,
                        "name": "0",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488192,
                        "name": "1",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488193,
                        "name": "2",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488194,
                        "name": "3",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488195,
                        "name": "4",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488196,
                        "name": "5",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488197,
                        "name": "6",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488198,
                        "name": "7",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488199,
                        "name": "8",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488200,
                        "name": "9",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376026",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "OVERS",
                "bettingType": "LINE",
                "marketName": "Match 1st Over ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376026",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 50000,
                    "maxProfit": 500000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 70000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488356,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488357,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488358,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376028",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "OVERS",
                "bettingType": "LINE",
                "marketName": "Match Only 2nd Over ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376028",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 50000,
                    "maxProfit": 500000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 70000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488361,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488362,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488363,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376029",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "OVERS",
                "bettingType": "LINE",
                "marketName": "6 Over SL ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376029",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 50000,
                    "maxProfit": 500000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 70000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488364,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488365,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488366,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376030",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "OVERS",
                "bettingType": "LINE",
                "marketName": "6 Over IND ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376030",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 50000,
                    "maxProfit": 500000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 70000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488367,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488368,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488369,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376031",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "OVERS",
                "bettingType": "LINE",
                "marketName": "10 Over SL ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376031",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 50000,
                    "maxProfit": 500000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 70000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488370,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488371,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488372,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376032",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "OVERS",
                "bettingType": "LINE",
                "marketName": "10 Over IND ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376032",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 50000,
                    "maxProfit": 500000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 70000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488373,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488374,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488375,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376033",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "OVERS",
                "bettingType": "LINE",
                "marketName": "20 Over SL ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376033",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 50000,
                    "maxProfit": 500000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 70000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488376,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488377,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488378,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376034",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "OVERS",
                "bettingType": "LINE",
                "marketName": "20 Over IND ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376034",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 50000,
                    "maxProfit": 500000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 70000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488379,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488380,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488381,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376036",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "1st WKT SL ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376036",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488392,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488393,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488394,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376038",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "1st WKT IND ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376038",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488405,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488406,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488407,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376039",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "1st 2 WKT SL ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376039",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488408,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488409,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488410,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376040",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "1st 2 WKT IND ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376040",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488411,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488412,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488413,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376041",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "1st 3 WKT SL ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376041",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488414,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488415,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488416,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376042",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "1st 3 WKT IND ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376042",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488417,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488418,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488419,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376043",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "1st 4 WKT SL ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376043",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488420,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488421,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488422,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376045",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "1st 4 WKT IND ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376045",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488433,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488434,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488435,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376046",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "1st WKT Run Bhav SL ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376046",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488436,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488437,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488438,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376047",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "1st WKT Run Bhav IND ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376047",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488439,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488440,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488441,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376049",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "P Nissanka Runs Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376049",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488452,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488453,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488454,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376050",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "K Mendis Runs Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376050",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488455,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488456,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488457,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376051",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "S Gill Runs Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376051",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488458,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488459,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488460,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376053",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Y Jaiswal Runs Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376053",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488471,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488472,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488473,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376056",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "P Nissanka Run Bhav Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376056",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488494,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488495,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488496,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376057",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "K Mendis Run Bhav Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376057",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488497,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488498,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488499,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376058",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "S Gill Run Bhav Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376058",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488500,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488501,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488502,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376059",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Y Jaiswal Run Bhav Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376059",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488503,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488504,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488505,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376060",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "P Nissanka Boundaries Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376060",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488506,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488507,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488508,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376062",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "K Mendis Boundaries Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376062",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488519,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488520,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488521,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376063",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "S Gill Boundaries Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376063",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488522,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488523,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488524,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376064",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Y Jaiswal Boundaries Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376064",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488525,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488526,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488527,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376065",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "1st WKT Pship Boundaries SL ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376065",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488528,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488529,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488530,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376066",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "1st WKT Pship Boundaries IND ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376066",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488531,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488532,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488533,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376067",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "H.M.B Face By P Nissanka Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376067",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488534,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488535,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488536,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376068",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "H.M.B Face By K Mendis Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376068",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488537,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488538,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488539,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376069",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "H.M.B Face By S Gill Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376069",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488540,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488541,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488542,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376070",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "H.M.B Face By Y Jaiswal Open Valid.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376070",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488543,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488544,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488545,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376071",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "1st WKT Lost To SL Balls ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376071",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488546,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488547,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488548,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376072",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "1st WKT Lost To IND Balls ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376072",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488549,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488550,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488551,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376073",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Total Match Four ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376073",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488552,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488553,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488554,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376074",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Total Match Six ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376074",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488555,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488556,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488557,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376075",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Total Match Boundaries ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376075",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488558,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488559,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488560,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376076",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Total Match WKT ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376076",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488561,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488562,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488563,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376077",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "3 WKT OR MORE BY BOWLER IN MATCH ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376077",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488564,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488565,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488566,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376078",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Total Match Caught Out ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376078",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488567,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488568,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488569,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376079",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Total Match LBW ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376079",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488570,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488571,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488572,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376080",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Total Match Bowled ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376080",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488573,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488574,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488575,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376081",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Total Match Run Out ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376081",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488576,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488577,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488578,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376082",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Total Match Wide ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376082",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488579,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488580,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488581,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376083",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Total Match Extra ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376083",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488582,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488583,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488584,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376084",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Highest Run In Over ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376084",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488585,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488586,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488587,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376085",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Top Scoring Batsman Runs ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376085",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488588,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488589,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488590,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376086",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Total Match Playing Over ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376086",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488591,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488592,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488593,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376087",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Total Match Fifty ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376087",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488594,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488595,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488596,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376088",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Total Match Duckouts ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376088",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488597,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488598,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488599,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376089",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Total Match 30s ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376089",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488600,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488601,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488602,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376090",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Highest Pship Runs ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376090",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488603,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488604,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488605,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376091",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Highest Pship Ball In Match ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376091",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488606,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488607,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488608,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376092",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BATSMAN",
                "bettingType": "LINE",
                "marketName": "Highest Pship Boundaries ADV.",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376092",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 25000,
                    "maxProfit": 250000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 30000,
                    "volume": 1
                },
                "status": "OPEN",
                "inPlay": true,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45488609,
                        "name": "ONE",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488610,
                        "name": "TWO",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45488611,
                        "name": "THREE",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376190",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "SPECIAL_MAKER",
                "bettingType": "BOOKMAKER",
                "marketName": "Special Maker",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376190",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 70000,
                    "volume": 1
                },
                "status": "INACTIVE",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45489081,
                        "name": "Sri Lanka",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45489082,
                        "name": "India",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            },
            {
                "marketId": "43376191",
                "marketTime": "2024-07-28T13:30:00Z",
                "marketType": "BOOKMAKER",
                "bettingType": "BOOKMAKER",
                "marketName": "6 Over Bookmaker ' SL VS IND '",
                "provider": "BETHUBS",
                "marketCondition": {
                    "marketId": "43376191",
                    "betLock": false,
                    "minBet": 100,
                    "maxBet": 100000,
                    "maxProfit": 1000000,
                    "betDelay": 0,
                    "mtp": 4,
                    "allowUnmatchBet": true,
                    "potLimit": 70000,
                    "volume": 1
                },
                "status": "INACTIVE",
                "inPlay": false,
                "sortPriority": 0,
                "runners": [
                    {
                        "id": 45489083,
                        "name": "SL 1 To 6 Over Run",
                        "sortPriority": 0,
                        "metadata": null
                    },
                    {
                        "id": 45489084,
                        "name": "IND 1 To 6 Over Run",
                        "sortPriority": 0,
                        "metadata": null
                    }
                ]
            }
        ],
        "isActive": true,
        "isArchived": false,
        "metadata": {
            "hasSession": "True",
            "hasBookMaker": "True",
            "messages": "{\"1.231149272\":[{\"time\":1722108548,\"message\":\"Soccer BOOKMAKER Started In Our Exchange...\",\"isActive\":true}],\"43375779\":[{\"time\":1722105089,\"message\":\" Tennis BOOKMAKER Started In Our Exchange...\\n\\n\",\"isActive\":true}],\"43375780\":[{\"time\":1722105117,\"message\":\" Betgames \\u0026 Vivo Casino Bet Started In Our Exchange...\\n\",\"isActive\":true}],\"43376190\":[{\"time\":1722165694,\"message\":\"2\\uFE0F\\u20E3 If both the teams score same runs in 6 overs the team that first bated will be declared as the winner...\\n\",\"isActive\":true},{\"time\":1722165729,\"message\":\" Aviator \\uD83D\\uDEE9 Games Started in Our Exchange..\\n\",\"isActive\":true}],\"43376191\":[{\"time\":1722165703,\"message\":\" 2\\uFE0F\\u20E3 If both the teams score same runs in 6 overs the team that first bated will be declared as the winner...\\n\",\"isActive\":true}]}",
            "inactiveMarkets": "[\"43375875\",\"43375876\",\"43375877\",\"43375878\",\"43375879\",\"43375880\",\"43375881\",\"43375882\",\"43375883\",\"43375884\",\"43375885\",\"43375886\",\"43375887\",\"43375891\",\"43375892\",\"43375894\",\"43375896\",\"43375897\",\"43375898\",\"43375899\",\"43375900\",\"43375905\",\"43375906\",\"43375907\",\"43375908\",\"43375909\",\"43375911\",\"43375913\",\"43375917\",\"43375918\",\"43375920\",\"43375921\",\"43375930\",\"43375933\",\"43375935\",\"43375937\",\"43375939\",\"43375942\",\"43375944\",\"43375947\",\"43375957\",\"43375958\",\"43375959\",\"43375961\",\"43375963\",\"43375965\",\"43375969\",\"43375971\"]",
            "archivedMarkets": "[]",
            "books": "{\"1.231149272\":\"1.231149272|0|OPEN|False|07/28/2024 11:24:12|1722165853112|False|7337~ACTIVE~3.4:219.27:*3.35:8366.99:*3.3:6225.76:~3.45:76.11:*3.5:7688.67:*3.55:51.63:,414464~ACTIVE~1.41:32.17:*1.4:19376.83:*1.39:3343.05:~1.42:20112.81:*1.43:14517.29:*1.44:956.21:\",\"43375779\":\"43375779|0|OPEN|True||1722143528851|False|45487599~SUSPENDED~~,45487600~ACTIVE~38:0:*37:0:*36:0:~41:0:*42:0:*43:0:\",\"43375780\":\"43375780|0|OPEN|True||1722105131360|False|45487601~ACTIVE~98:0:*97:0:*96:0:~,45487602~ACTIVE~98:0:*97:0:*96:0:~\",\"43375788\":\"43375788|0|OPEN|True||1722108133237|False|45487624~ACTIVE~1.98:0:0~:0:0,45487625~ACTIVE~1.98:0:0~:0:0\",\"43375791\":\"43375791|0|OPEN|True||1722108137046|False|45487632~ACTIVE~1.98:0:0~:0:0,45487633~ACTIVE~1.98:0:0~:0:0\",\"43375793\":\"43375793|0|OPEN|True||1722108140622|False|45487637~ACTIVE~1.98:0:0~:0:0,45487638~ACTIVE~1.98:0:0~:0:0\",\"43375794\":\"43375794|0|OPEN|True||1722108146220|False|45487639~ACTIVE~1.98:0:0~:0:0,45487640~ACTIVE~1.98:0:0~:0:0\",\"43375795\":\"43375795|0|OPEN|True||1722108149805|False|45487641~ACTIVE~1.98:0:0~:0:0,45487642~ACTIVE~1.98:0:0~:0:0\",\"43375798\":\"43375798|0|OPEN|True||1722108153941|False|45487649~ACTIVE~1.98:0:0~:0:0,45487650~ACTIVE~1.98:0:0~:0:0\",\"43375801\":\"43375801|0|OPEN|True||1722108157893|False|45487657~ACTIVE~1.98:0:0~:0:0,45487658~ACTIVE~1.98:0:0~:0:0\",\"43375803\":\"43375803|0|OPEN|True||1722108161964|False|45487662~ACTIVE~1.98:0:0~:0:0,45487663~ACTIVE~1.98:0:0~:0:0\",\"43375806\":\"43375806|0|OPEN|True||1722108166552|False|45487670~ACTIVE~1.98:0:0~:0:0,45487671~ACTIVE~1.98:0:0~:0:0\",\"43375807\":\"43375807|0|OPEN|True||1722108176711|False|45487672~ACTIVE~1.98:0:0~:0:0,45487673~ACTIVE~1.98:0:0~:0:0\",\"43375808\":\"43375808|0|OPEN|True||1722108180974|False|45487674~ACTIVE~1.98:0:0~:0:0,45487675~ACTIVE~1.98:0:0~:0:0\",\"43375810\":\"43375810|0|OPEN|True||1722108184486|False|45487679~ACTIVE~1.98:0:0~:0:0,45487680~ACTIVE~1.98:0:0~:0:0\",\"43375813\":\"43375813|0|OPEN|True||1722108188216|False|45487687~ACTIVE~1.98:0:0~:0:0,45487688~ACTIVE~1.98:0:0~:0:0\",\"43375815\":\"43375815|0|OPEN|True||1722108193267|False|45487692~ACTIVE~1.98:0:0~:0:0,45487693~ACTIVE~1.98:0:0~:0:0\",\"43375817\":\"43375817|0|OPEN|True||1722108197321|False|45487697~ACTIVE~1.98:0:0~:0:0,45487698~ACTIVE~1.98:0:0~:0:0\",\"43375829\":\"43375829|0|OPEN|True||1722108203141|False|45487732~ACTIVE~1.98:0:0~:0:0,45487733~ACTIVE~1.98:0:0~:0:0\",\"43375839\":\"43375839|0|OPEN|True||1722108217287|False|45487761~ACTIVE~1.98:0:0~:0:0,45487762~ACTIVE~1.98:0:0~:0:0\",\"43375843\":\"43375843|0|OPEN|True||1722108221369|False|45487772~ACTIVE~1.98:0:0~:0:0,45487773~ACTIVE~1.98:0:0~:0:0\",\"43375847\":\"43375847|0|OPEN|True||1722108225515|False|45487783~ACTIVE~1.98:0:0~:0:0,45487784~ACTIVE~1.98:0:0~:0:0\",\"43375853\":\"43375853|0|OPEN|True||1722108229459|False|45487800~ACTIVE~1.98:0:0~:0:0,45487801~ACTIVE~1.98:0:0~:0:0\",\"43375858\":\"43375858|0|OPEN|True||1722108233711|False|45487814~ACTIVE~1.98:0:0~:0:0,45487815~ACTIVE~1.98:0:0~:0:0\",\"43375859\":\"43375859|0|OPEN|True||1722108246414|False|45487816~ACTIVE~1.98:0:0~:0:0,45487817~ACTIVE~1.98:0:0~:0:0\",\"43375860\":\"43375860|0|OPEN|True||1722108251686|False|45487818~ACTIVE~1.98:0:0~:0:0,45487819~ACTIVE~1.98:0:0~:0:0\",\"43375861\":\"43375861|0|OPEN|True||1722108256640|False|45487820~ACTIVE~1.98:0:0~:0:0,45487821~ACTIVE~1.98:0:0~:0:0\",\"43375862\":\"43375862|0|OPEN|True||1722108263214|False|45487822~ACTIVE~1.98:0:0~:0:0,45487823~ACTIVE~1.98:0:0~:0:0\",\"43375863\":\"43375863|0|OPEN|True||1722108398213|False|45487824~ACTIVE~1.98:0:0~:0:0,45487825~ACTIVE~1.98:0:0~:0:0\",\"43375864\":\"43375864|0|OPEN|True||1722108267307|False|45487826~ACTIVE~1.98:0:0~:0:0,45487827~ACTIVE~1.98:0:0~:0:0\",\"43375865\":\"43375865|0|OPEN|True||1722108271038|False|45487828~ACTIVE~1.98:0:0~:0:0,45487829~ACTIVE~1.98:0:0~:0:0\",\"43375866\":\"43375866|0|OPEN|True||1722108276369|False|45487830~ACTIVE~1.98:0:0~:0:0,45487831~ACTIVE~1.98:0:0~:0:0\",\"43375867\":\"43375867|0|OPEN|True||1722108280241|False|45487832~ACTIVE~1.98:0:0~:0:0,45487833~ACTIVE~1.98:0:0~:0:0\",\"43375869\":\"43375869|0|OPEN|True||1722108294563|False|45487836~ACTIVE~9.5:0:0~:0:0,45487837~ACTIVE~9.5:0:0~:0:0,45487838~ACTIVE~9.5:0:0~:0:0,45487839~ACTIVE~9.5:0:0~:0:0,45487840~ACTIVE~9.5:0:0~:0:0,45487841~ACTIVE~9.5:0:0~:0:0,45487842~ACTIVE~9.5:0:0~:0:0,45487843~ACTIVE~9.5:0:0~:0:0,45487844~ACTIVE~9.5:0:0~:0:0,45487845~ACTIVE~9.5:0:0~:0:0\",\"43375870\":\"43375870|0|OPEN|True||1722108303285|False|45487846~ACTIVE~9.5:0:0~:0:0,45487847~ACTIVE~9.5:0:0~:0:0,45487848~ACTIVE~9.5:0:0~:0:0,45487849~ACTIVE~9.5:0:0~:0:0,45487850~ACTIVE~9.5:0:0~:0:0,45487851~ACTIVE~9.5:0:0~:0:0,45487852~ACTIVE~9.5:0:0~:0:0,45487853~ACTIVE~9.5:0:0~:0:0,45487854~ACTIVE~9.5:0:0~:0:0,45487855~ACTIVE~9.5:0:0~:0:0\",\"43375871\":\"43375871|0|OPEN|True||1722108311868|False|45487856~ACTIVE~9.5:0:0~:0:0,45487857~ACTIVE~9.5:0:0~:0:0,45487858~ACTIVE~9.5:0:0~:0:0,45487859~ACTIVE~9.5:0:0~:0:0,45487860~ACTIVE~9.5:0:0~:0:0,45487861~ACTIVE~9.5:0:0~:0:0,45487862~ACTIVE~9.5:0:0~:0:0,45487863~ACTIVE~9.5:0:0~:0:0,45487864~ACTIVE~9.5:0:0~:0:0,45487865~ACTIVE~9.5:0:0~:0:0\",\"43375872\":\"43375872|0|OPEN|True||1722108320679|False|45487866~ACTIVE~9.5:0:0~:0:0,45487867~ACTIVE~9.5:0:0~:0:0,45487868~ACTIVE~9.5:0:0~:0:0,45487869~ACTIVE~9.5:0:0~:0:0,45487870~ACTIVE~9.5:0:0~:0:0,45487871~ACTIVE~9.5:0:0~:0:0,45487872~ACTIVE~9.5:0:0~:0:0,45487873~ACTIVE~9.5:0:0~:0:0,45487874~ACTIVE~9.5:0:0~:0:0,45487875~ACTIVE~9.5:0:0~:0:0\",\"43375873\":\"43375873|0|OPEN|True||1722108330161|False|45487876~ACTIVE~9.5:0:0~:0:0,45487877~ACTIVE~9.5:0:0~:0:0,45487878~ACTIVE~9.5:0:0~:0:0,45487879~ACTIVE~9.5:0:0~:0:0,45487880~ACTIVE~9.5:0:0~:0:0,45487881~ACTIVE~9.5:0:0~:0:0,45487882~ACTIVE~9.5:0:0~:0:0,45487883~ACTIVE~9.5:0:0~:0:0,45487884~ACTIVE~9.5:0:0~:0:0,45487885~ACTIVE~9.5:0:0~:0:0\",\"43375874\":\"43375874|0|OPEN|True||1722108340719|False|45487886~ACTIVE~9.5:0:0~:0:0,45487887~ACTIVE~9.5:0:0~:0:0,45487888~ACTIVE~9.5:0:0~:0:0,45487889~ACTIVE~9.5:0:0~:0:0,45487890~ACTIVE~9.5:0:0~:0:0,45487891~ACTIVE~9.5:0:0~:0:0,45487892~ACTIVE~9.5:0:0~:0:0,45487893~ACTIVE~9.5:0:0~:0:0,45487894~ACTIVE~9.5:0:0~:0:0,45487895~ACTIVE~9.5:0:0~:0:0\",\"43375875\":\"43375875|0|OPEN|True||1722107433579|False|45487896~ACTIVE~1.98:0:0~:0:0,45487897~ACTIVE~1.98:0:0~:0:0\",\"43375876\":\"43375876|0|OPEN|True||1722107438146|False|45487898~ACTIVE~1.98:0:0~:0:0,45487899~ACTIVE~1.98:0:0~:0:0\",\"43375877\":\"43375877|0|OPEN|True||1722107442554|False|45487900~ACTIVE~1.98:0:0~:0:0,45487901~ACTIVE~1.98:0:0~:0:0\",\"43375878\":\"43375878|0|OPEN|True||1722107446857|False|45487902~ACTIVE~1.98:0:0~:0:0,45487903~ACTIVE~1.98:0:0~:0:0\",\"43375879\":\"43375879|0|OPEN|True||1722107450594|False|45487904~ACTIVE~1.98:0:0~:0:0,45487905~ACTIVE~1.98:0:0~:0:0\",\"43375880\":\"43375880|0|OPEN|True||1722107454595|False|45487906~ACTIVE~1.98:0:0~:0:0,45487907~ACTIVE~1.98:0:0~:0:0\",\"43375881\":\"43375881|0|OPEN|True||1722107458430|False|45487908~ACTIVE~1.98:0:0~:0:0,45487909~ACTIVE~1.98:0:0~:0:0\",\"43375882\":\"43375882|0|OPEN|True||1722107462156|False|45487910~ACTIVE~1.98:0:0~:0:0,45487911~ACTIVE~1.98:0:0~:0:0\",\"43375883\":\"43375883|0|OPEN|True||1722107465749|False|45487912~ACTIVE~1.98:0:0~:0:0,45487913~ACTIVE~1.98:0:0~:0:0\",\"43375884\":\"43375884|0|OPEN|True||1722107469289|False|45487914~ACTIVE~1.98:0:0~:0:0,45487915~ACTIVE~1.98:0:0~:0:0\",\"43375885\":\"43375885|0|OPEN|True||1722107473533|False|45487916~ACTIVE~1.98:0:0~:0:0,45487917~ACTIVE~1.98:0:0~:0:0\",\"43375886\":\"43375886|0|OPEN|True||1722107477733|False|45487918~ACTIVE~1.98:0:0~:0:0,45487919~ACTIVE~1.98:0:0~:0:0\",\"43375887\":\"43375887|0|OPEN|True||1722107481767|False|45487920~ACTIVE~1.98:0:0~:0:0,45487921~ACTIVE~1.98:0:0~:0:0\",\"43375891\":\"43375891|0|OPEN|True||1722107485600|False|45487931~ACTIVE~1.98:0:0~:0:0,45487932~ACTIVE~1.98:0:0~:0:0\",\"43375892\":\"43375892|0|OPEN|True||1722107489190|False|45487933~ACTIVE~1.98:0:0~:0:0,45487934~ACTIVE~1.98:0:0~:0:0\",\"43375894\":\"43375894|0|OPEN|True||1722107492790|False|45487938~ACTIVE~1.98:0:0~:0:0,45487939~ACTIVE~1.98:0:0~:0:0\",\"43375896\":\"43375896|0|OPEN|True||1722107497055|False|45487943~ACTIVE~1.98:0:0~:0:0,45487944~ACTIVE~1.98:0:0~:0:0\",\"43375897\":\"43375897|0|OPEN|True||1722107501765|False|45487945~ACTIVE~1.98:0:0~:0:0,45487946~ACTIVE~1.98:0:0~:0:0\",\"43375898\":\"43375898|0|OPEN|True||1722107505185|False|45487947~ACTIVE~1.98:0:0~:0:0,45487948~ACTIVE~1.98:0:0~:0:0\",\"43375899\":\"43375899|0|OPEN|True||1722107508742|False|45487949~ACTIVE~1.98:0:0~:0:0,45487950~ACTIVE~1.98:0:0~:0:0\",\"43375900\":\"43375900|0|OPEN|True||1722107512687|False|45487951~ACTIVE~1.98:0:0~:0:0,45487952~ACTIVE~1.98:0:0~:0:0\",\"43375905\":\"43375905|0|OPEN|True||1722107517020|False|45487965~ACTIVE~1.98:0:0~:0:0,45487966~ACTIVE~1.98:0:0~:0:0\",\"43375906\":\"43375906|0|OPEN|True||1722107529726|False|45487967~ACTIVE~1.98:0:0~:0:0,45487968~ACTIVE~1.98:0:0~:0:0\",\"43375907\":\"43375907|0|OPEN|True||1722107535262|False|45487969~ACTIVE~1.98:0:0~:0:0,45487970~ACTIVE~1.98:0:0~:0:0\",\"43375908\":\"43375908|0|OPEN|True||1722107538935|False|45487971~ACTIVE~1.98:0:0~:0:0,45487972~ACTIVE~1.98:0:0~:0:0\",\"43375909\":\"43375909|0|OPEN|True||1722107542701|False|45487973~ACTIVE~1.98:0:0~:0:0,45487974~ACTIVE~1.98:0:0~:0:0\",\"43375911\":\"43375911|0|OPEN|True||1722107546542|False|45487978~ACTIVE~1.98:0:0~:0:0,45487979~ACTIVE~1.98:0:0~:0:0\",\"43375913\":\"43375913|0|OPEN|True||1722107552561|False|45487983~ACTIVE~1.98:0:0~:0:0,45487984~ACTIVE~1.98:0:0~:0:0\",\"43375917\":\"43375917|0|OPEN|True||1722107556632|False|45487993~ACTIVE~1.98:0:0~:0:0,45487994~ACTIVE~1.98:0:0~:0:0\",\"43375918\":\"43375918|0|OPEN|True||1722107560764|False|45487995~ACTIVE~1.98:0:0~:0:0,45487996~ACTIVE~1.98:0:0~:0:0\",\"43375920\":\"43375920|0|OPEN|True||1722107565303|False|45488000~ACTIVE~1.98:0:0~:0:0,45488001~ACTIVE~1.98:0:0~:0:0\",\"43375921\":\"43375921|0|OPEN|True||1722107569288|False|45488002~ACTIVE~1.98:0:0~:0:0,45488003~ACTIVE~1.98:0:0~:0:0\",\"43375930\":\"43375930|0|OPEN|True||1722107574888|False|45488027~ACTIVE~1.98:0:0~:0:0,45488028~ACTIVE~1.98:0:0~:0:0\",\"43375933\":\"43375933|0|OPEN|True||1722107578889|False|45488035~ACTIVE~1.98:0:0~:0:0,45488036~ACTIVE~1.98:0:0~:0:0\",\"43375935\":\"43375935|0|OPEN|True||1722107583009|False|45488040~ACTIVE~1.98:0:0~:0:0,45488041~ACTIVE~1.98:0:0~:0:0\",\"43375937\":\"43375937|0|OPEN|True||1722107587472|False|45488045~ACTIVE~1.98:0:0~:0:0,45488046~ACTIVE~1.98:0:0~:0:0\",\"43375939\":\"43375939|0|OPEN|True||1722107591635|False|45488050~ACTIVE~1.98:0:0~:0:0,45488051~ACTIVE~1.98:0:0~:0:0\",\"43375942\":\"43375942|0|OPEN|True||1722107597533|False|45488058~ACTIVE~1.98:0:0~:0:0,45488059~ACTIVE~1.98:0:0~:0:0\",\"43375944\":\"43375944|0|OPEN|True||1722107601906|False|45488063~ACTIVE~1.98:0:0~:0:0,45488064~ACTIVE~1.98:0:0~:0:0\",\"43375947\":\"43375947|0|OPEN|True||1722107605720|False|45488071~ACTIVE~1.98:0:0~:0:0,45488072~ACTIVE~1.98:0:0~:0:0\",\"43375957\":\"43375957|0|OPEN|True||1722107617462|False|45488100~ACTIVE~9.5:0:0~:0:0,45488101~ACTIVE~9.5:0:0~:0:0,45488102~ACTIVE~9.5:0:0~:0:0,45488103~ACTIVE~9.5:0:0~:0:0,45488104~ACTIVE~9.5:0:0~:0:0,45488105~ACTIVE~9.5:0:0~:0:0,45488106~ACTIVE~9.5:0:0~:0:0,45488107~ACTIVE~9.5:0:0~:0:0,45488108~ACTIVE~9.5:0:0~:0:0,45488109~ACTIVE~9.5:0:0~:0:0\",\"43375958\":\"43375958|0|OPEN|True||1722107627776|False|45488110~ACTIVE~9.5:0:0~:0:0,45488111~ACTIVE~9.5:0:0~:0:0,45488112~ACTIVE~9.5:0:0~:0:0,45488113~ACTIVE~9.5:0:0~:0:0,45488114~ACTIVE~9.5:0:0~:0:0,45488115~ACTIVE~9.5:0:0~:0:0,45488116~ACTIVE~9.5:0:0~:0:0,45488117~ACTIVE~9.5:0:0~:0:0,45488118~ACTIVE~9.5:0:0~:0:0,45488119~ACTIVE~9.5:0:0~:0:0\",\"43375959\":\"43375959|0|OPEN|True||1722107637580|False|45488120~ACTIVE~9.5:0:0~:0:0,45488121~ACTIVE~9.5:0:0~:0:0,45488122~ACTIVE~9.5:0:0~:0:0,45488123~ACTIVE~9.5:0:0~:0:0,45488124~ACTIVE~9.5:0:0~:0:0,45488125~ACTIVE~9.5:0:0~:0:0,45488126~ACTIVE~9.5:0:0~:0:0,45488127~ACTIVE~9.5:0:0~:0:0,45488128~ACTIVE~9.5:0:0~:0:0,45488129~ACTIVE~9.5:0:0~:0:0\",\"43375961\":\"43375961|0|OPEN|True||1722107647302|False|45488133~ACTIVE~9.5:0:0~:0:0,45488134~ACTIVE~9.5:0:0~:0:0,45488135~ACTIVE~9.5:0:0~:0:0,45488136~ACTIVE~9.5:0:0~:0:0,45488137~ACTIVE~9.5:0:0~:0:0,45488138~ACTIVE~9.5:0:0~:0:0,45488139~ACTIVE~9.5:0:0~:0:0,45488140~ACTIVE~9.5:0:0~:0:0,45488141~ACTIVE~9.5:0:0~:0:0,45488142~ACTIVE~9.5:0:0~:0:0\",\"43375963\":\"43375963|0|OPEN|True||1722107656841|False|45488146~ACTIVE~9.5:0:0~:0:0,45488147~ACTIVE~9.5:0:0~:0:0,45488148~ACTIVE~9.5:0:0~:0:0,45488149~ACTIVE~9.5:0:0~:0:0,45488150~ACTIVE~9.5:0:0~:0:0,45488151~ACTIVE~9.5:0:0~:0:0,45488152~ACTIVE~9.5:0:0~:0:0,45488153~ACTIVE~9.5:0:0~:0:0,45488154~ACTIVE~9.5:0:0~:0:0,45488155~ACTIVE~9.5:0:0~:0:0\",\"43375965\":\"43375965|0|OPEN|True||1722107669589|False|45488159~ACTIVE~9.5:0:0~:0:0,45488160~ACTIVE~9.5:0:0~:0:0,45488161~ACTIVE~9.5:0:0~:0:0,45488162~ACTIVE~9.5:0:0~:0:0,45488163~ACTIVE~9.5:0:0~:0:0,45488164~ACTIVE~9.5:0:0~:0:0,45488165~ACTIVE~9.5:0:0~:0:0,45488166~ACTIVE~9.5:0:0~:0:0,45488167~ACTIVE~9.5:0:0~:0:0,45488168~ACTIVE~9.5:0:0~:0:0\",\"43375969\":\"43375969|0|OPEN|True||1722107678282|False|45488178~ACTIVE~9.5:0:0~:0:0,45488179~ACTIVE~9.5:0:0~:0:0,45488180~ACTIVE~9.5:0:0~:0:0,45488181~ACTIVE~9.5:0:0~:0:0,45488182~ACTIVE~9.5:0:0~:0:0,45488183~ACTIVE~9.5:0:0~:0:0,45488184~ACTIVE~9.5:0:0~:0:0,45488185~ACTIVE~9.5:0:0~:0:0,45488186~ACTIVE~9.5:0:0~:0:0,45488187~ACTIVE~9.5:0:0~:0:0\",\"43375971\":\"43375971|0|OPEN|True||1722107686670|False|45488191~ACTIVE~9.5:0:0~:0:0,45488192~ACTIVE~9.5:0:0~:0:0,45488193~ACTIVE~9.5:0:0~:0:0,45488194~ACTIVE~9.5:0:0~:0:0,45488195~ACTIVE~9.5:0:0~:0:0,45488196~ACTIVE~9.5:0:0~:0:0,45488197~ACTIVE~9.5:0:0~:0:0,45488198~ACTIVE~9.5:0:0~:0:0,45488199~ACTIVE~9.5:0:0~:0:0,45488200~ACTIVE~9.5:0:0~:0:0\",\"43376026\":\"43376026|0|OPEN|True||1722118032427|False|45488356~ACTIVE~100:0:7~100:0:6,45488357~SUSPENDED~~,45488358~SUSPENDED~~\",\"43376028\":\"43376028|0|OPEN|True||1722118038948|False|45488361~ACTIVE~100:0:9~100:0:8,45488362~SUSPENDED~~,45488363~SUSPENDED~~\",\"43376029\":\"43376029|0|OPEN|True||1722118050498|False|45488364~ACTIVE~100:0:51~100:0:49,45488365~SUSPENDED~~,45488366~SUSPENDED~~\",\"43376030\":\"43376030|0|OPEN|True||1722143069502|False|45488367~ACTIVE~100:0:60~100:0:58,45488368~SUSPENDED~~,45488369~SUSPENDED~~\",\"43376031\":\"43376031|0|OPEN|True||1722118062157|False|45488370~ACTIVE~100:0:81~100:0:79,45488371~SUSPENDED~~,45488372~SUSPENDED~~\",\"43376032\":\"43376032|0|OPEN|True||1722143096541|False|45488373~ACTIVE~100:0:91~100:0:89,45488374~SUSPENDED~~,45488375~SUSPENDED~~\",\"43376033\":\"43376033|0|OPEN|True||1722118089632|False|45488376~ACTIVE~100:0:173~100:0:170,45488377~SUSPENDED~~,45488378~SUSPENDED~~\",\"43376034\":\"43376034|0|OPEN|True||1722151027437|False|45488379~ACTIVE~100:0:199~100:0:196,45488380~SUSPENDED~~,45488381~SUSPENDED~~\",\"43376036\":\"43376036|0|OPEN|True||1722118279339|False|45488392~ACTIVE~90:0:22~110:0:22,45488393~SUSPENDED~~,45488394~SUSPENDED~~\",\"43376038\":\"43376038|0|OPEN|True||1722118284939|False|45488405~ACTIVE~90:0:28~110:0:28,45488406~SUSPENDED~~,45488407~SUSPENDED~~\",\"43376039\":\"43376039|0|OPEN|True||1722118290302|False|45488408~ACTIVE~90:0:54~110:0:54,45488409~SUSPENDED~~,45488410~SUSPENDED~~\",\"43376040\":\"43376040|0|OPEN|True||1722118296136|False|45488411~ACTIVE~90:0:64~110:0:64,45488412~SUSPENDED~~,45488413~SUSPENDED~~\",\"43376041\":\"43376041|0|OPEN|True||1722118301796|False|45488414~ACTIVE~90:0:84~110:0:84,45488415~SUSPENDED~~,45488416~SUSPENDED~~\",\"43376042\":\"43376042|0|OPEN|True||1722118307814|False|45488417~ACTIVE~90:0:99~110:0:99,45488418~SUSPENDED~~,45488419~SUSPENDED~~\",\"43376043\":\"43376043|0|OPEN|True||1722118316007|False|45488420~ACTIVE~90:0:114~110:0:114,45488421~SUSPENDED~~,45488422~SUSPENDED~~\",\"43376045\":\"43376045|0|OPEN|True||1722118327929|False|45488433~ACTIVE~90:0:135~110:0:135,45488434~SUSPENDED~~,45488435~SUSPENDED~~\",\"43376046\":\"43376046|0|OPEN|True||1722148986275|False|45488436~ACTIVE~4:0:1~7:0:1,45488437~SUSPENDED~~,45488438~SUSPENDED~~\",\"43376047\":\"43376047|0|OPEN|True||1722148996877|False|45488439~ACTIVE~5:0:1~8:0:1,45488440~SUSPENDED~~,45488441~SUSPENDED~~\",\"43376049\":\"43376049|0|OPEN|True||1722118358036|False|45488452~ACTIVE~90:0:20~110:0:20,45488453~SUSPENDED~~,45488454~SUSPENDED~~\",\"43376050\":\"43376050|0|OPEN|True||1722118361864|False|45488455~ACTIVE~90:0:20~110:0:20,45488456~SUSPENDED~~,45488457~SUSPENDED~~\",\"43376051\":\"43376051|0|OPEN|True||1722118417982|False|45488458~ACTIVE~90:0:31~110:0:31,45488459~SUSPENDED~~,45488460~SUSPENDED~~\",\"43376053\":\"43376053|0|OPEN|True||1722118427058|False|45488471~ACTIVE~90:0:25~110:0:25,45488472~SUSPENDED~~,45488473~SUSPENDED~~\",\"43376056\":\"43376056|0|OPEN|True||1722149015205|False|45488494~ACTIVE~5:0:1~8:0:1,45488495~SUSPENDED~~,45488496~SUSPENDED~~\",\"43376057\":\"43376057|0|OPEN|True||1722149028872|False|45488497~ACTIVE~5:0:1~8:0:1,45488498~SUSPENDED~~,45488499~SUSPENDED~~\",\"43376058\":\"43376058|0|OPEN|True||1722118440590|False|45488500~ACTIVE~3:0:1~6:0:1,45488501~SUSPENDED~~,45488502~SUSPENDED~~\",\"43376059\":\"43376059|0|OPEN|True||1722149051786|False|45488503~ACTIVE~5:0:1~8:0:1,45488504~SUSPENDED~~,45488505~SUSPENDED~~\",\"43376060\":\"43376060|0|OPEN|True||1722118450638|False|45488506~ACTIVE~100:0:4~100:0:3,45488507~SUSPENDED~~,45488508~SUSPENDED~~\",\"43376062\":\"43376062|0|OPEN|True||1722118456749|False|45488519~ACTIVE~100:0:4~100:0:3,45488520~SUSPENDED~~,45488521~SUSPENDED~~\",\"43376063\":\"43376063|0|OPEN|True||1722118462992|False|45488522~ACTIVE~100:0:5~100:0:4,45488523~SUSPENDED~~,45488524~SUSPENDED~~\",\"43376064\":\"43376064|0|OPEN|True||1722118476571|False|45488525~ACTIVE~100:0:5~100:0:4,45488526~SUSPENDED~~,45488527~SUSPENDED~~\",\"43376065\":\"43376065|0|OPEN|True||1722118487297|False|45488528~ACTIVE~100:0:4~100:0:3,45488529~SUSPENDED~~,45488530~SUSPENDED~~\",\"43376066\":\"43376066|0|OPEN|True||1722118495088|False|45488531~ACTIVE~100:0:5~100:0:4,45488532~SUSPENDED~~,45488533~SUSPENDED~~\",\"43376067\":\"43376067|0|OPEN|True||1722118503000|False|45488534~ACTIVE~90:0:15~110:0:15,45488535~SUSPENDED~~,45488536~SUSPENDED~~\",\"43376068\":\"43376068|0|OPEN|True||1722118509463|False|45488537~ACTIVE~90:0:15~110:0:15,45488538~SUSPENDED~~,45488539~SUSPENDED~~\",\"43376069\":\"43376069|0|OPEN|True||1722118514526|False|45488540~ACTIVE~90:0:24~110:0:24,45488541~SUSPENDED~~,45488542~SUSPENDED~~\",\"43376070\":\"43376070|0|OPEN|True||1722118521883|False|45488543~ACTIVE~90:0:18~110:0:18,45488544~SUSPENDED~~,45488545~SUSPENDED~~\",\"43376071\":\"43376071|0|OPEN|True||1722118534977|False|45488546~ACTIVE~90:0:17~110:0:17,45488547~SUSPENDED~~,45488548~SUSPENDED~~\",\"43376072\":\"43376072|0|OPEN|True||1722118546910|False|45488549~ACTIVE~90:0:21~110:0:21,45488550~SUSPENDED~~,45488551~SUSPENDED~~\",\"43376073\":\"43376073|0|OPEN|True||1722118555046|False|45488552~ACTIVE~100:0:33~100:0:31,45488553~SUSPENDED~~,45488554~SUSPENDED~~\",\"43376074\":\"43376074|0|OPEN|True||1722118561133|False|45488555~ACTIVE~100:0:14~100:0:12,45488556~SUSPENDED~~,45488557~SUSPENDED~~\",\"43376075\":\"43376075|0|OPEN|True||1722118566289|False|45488558~ACTIVE~100:0:45~100:0:43,45488559~SUSPENDED~~,45488560~SUSPENDED~~\",\"43376076\":\"43376076|0|OPEN|True||1722118572914|False|45488561~ACTIVE~100:0:14~100:0:13,45488562~SUSPENDED~~,45488563~SUSPENDED~~\",\"43376077\":\"43376077|0|OPEN|True||1722134080624|False|45488564~ACTIVE~100:0:4~100:0:3,45488565~SUSPENDED~~,45488566~SUSPENDED~~\",\"43376078\":\"43376078|0|OPEN|True||1722118584590|False|45488567~ACTIVE~100:0:9~100:0:8,45488568~SUSPENDED~~,45488569~SUSPENDED~~\",\"43376079\":\"43376079|0|OPEN|True||1722118588998|False|45488570~ACTIVE~100:0:2~100:0:1,45488571~SUSPENDED~~,45488572~SUSPENDED~~\",\"43376080\":\"43376080|0|OPEN|True||1722134107085|False|45488573~ACTIVE~80:0:3~120:0:3,45488574~SUSPENDED~~,45488575~SUSPENDED~~\",\"43376081\":\"43376081|0|OPEN|True||1722118599079|False|45488576~ACTIVE~100:0:2~100:0:1,45488577~SUSPENDED~~,45488578~SUSPENDED~~\",\"43376082\":\"43376082|0|OPEN|True||1722118604859|False|45488579~ACTIVE~100:0:12~100:0:10,45488580~SUSPENDED~~,45488581~SUSPENDED~~\",\"43376083\":\"43376083|0|OPEN|True||1722118610011|False|45488582~ACTIVE~100:0:20~100:0:18,45488583~SUSPENDED~~,45488584~SUSPENDED~~\",\"43376084\":\"43376084|0|OPEN|True||1722118620257|False|45488585~ACTIVE~100:0:20~100:0:19,45488586~SUSPENDED~~,45488587~SUSPENDED~~\",\"43376085\":\"43376085|0|OPEN|True||1722118624378|False|45488588~ACTIVE~100:0:71~100:0:69,45488589~SUSPENDED~~,45488590~SUSPENDED~~\",\"43376086\":\"43376086|0|OPEN|True||1722118630093|False|45488591~ACTIVE~100:0:40~100:0:39,45488592~SUSPENDED~~,45488593~SUSPENDED~~\",\"43376087\":\"43376087|0|OPEN|True||1722118635016|False|45488594~ACTIVE~100:0:3~100:0:2,45488595~SUSPENDED~~,45488596~SUSPENDED~~\",\"43376088\":\"43376088|0|OPEN|True||1722118640666|False|45488597~ACTIVE~100:0:2~100:0:1,45488598~SUSPENDED~~,45488599~SUSPENDED~~\",\"43376089\":\"43376089|0|OPEN|True||1722118646512|False|45488600~ACTIVE~100:0:4~100:0:3,45488601~SUSPENDED~~,45488602~SUSPENDED~~\",\"43376090\":\"43376090|0|OPEN|True||1722118653661|False|45488603~ACTIVE~100:0:80~100:0:75,45488604~SUSPENDED~~,45488605~SUSPENDED~~\",\"43376091\":\"43376091|0|OPEN|True||1722118659285|False|45488606~ACTIVE~100:0:51~100:0:49,45488607~SUSPENDED~~,45488608~SUSPENDED~~\",\"43376092\":\"43376092|0|OPEN|True||1722118663706|False|45488609~ACTIVE~100:0:13~100:0:11,45488610~SUSPENDED~~,45488611~SUSPENDED~~\",\"43376190\":null,\"43376191\":null}"
        }
    };
  };
  
  module.exports = {
    getEventDetails,
  };
  