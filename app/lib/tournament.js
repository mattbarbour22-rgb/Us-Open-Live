// Central tournament setup.
// To trial another event, change this file plus your Vercel env vars:
// SLASH_GOLF_TOURN_ID, SLASH_GOLF_YEAR, TOURNAMENT_STATE_ID.

export const tournamentConfig = {
  majorLabel: '126TH U.S. OPEN',
  title: 'U.S. OPEN PICK 3 LIVE',
  venue: 'Shinnecock Hills Golf Club',
  location: 'Southampton, New York',
  dates: 'June 18–21, 2026',
  prizePool: '$3,500',
  tournamentTimezone: 'America/New_York',
  jackpotRule: 'To win, your picks must include the outright U.S. Open winner. If no entry has the winner, the prize jackpots again.',
  heroImage: 'https://images.unsplash.com/photo-1500932334442-8761ee4810a7?auto=format&fit=crop&w=2400&q=80'
};

export const poolEntries = [
  { player: "Barty", picks: ["Scottie Scheffler", "Tom Kim", "Tony Finau"] },
  { player: "Enright", picks: ["Scottie Scheffler", "Tom Kim", "Jordan Spieth"] },
  { player: "Roche SES", picks: ["Scottie Scheffler", "Jordan Spieth", "Tony Finau"] },
  { player: "Kitch", picks: ["Tom Kim", "Jordan Spieth", "Tony Finau"] },

  { player: "Brom", picks: ["Brooks Koepka", "Keith Mitchell", "Max Greyserman"] },
  { player: "Shaw", picks: ["Brooks Koepka", "Keith Mitchell", "Taylor Pendrith"] },
  { player: "Brian Irish", picks: ["Brooks Koepka", "Max Greyserman", "Taylor Pendrith"] },
  { player: "Jonesy", picks: ["Keith Mitchell", "Max Greyserman", "Taylor Pendrith"] },

  { player: "Haycock Snr", picks: ["Sungjae Im", "Si Woo Kim", "Matti Schmid"] },
  { player: "Mal J", picks: ["Sungjae Im", "Si Woo Kim", "Adam Svensson"] },
  { player: "Doc Campbell", picks: ["Sungjae Im", "Matti Schmid", "Adam Svensson"] },
  { player: "T Coleman", picks: ["Si Woo Kim", "Matti Schmid", "Adam Svensson"] },

  { player: "A Rose", picks: ["Chris Kirk", "Eric Cole", "Davis Thompson"] },
  { player: "D Haycock", picks: ["Chris Kirk", "Eric Cole", "Jhonattan Vegas"] },
  { player: "P Langley", picks: ["Chris Kirk", "Davis Thompson", "Jhonattan Vegas"] },
  { player: "T Wallace", picks: ["Eric Cole", "Davis Thompson", "Jhonattan Vegas"] },

  { player: "K Ferg", picks: ["Adam Hadwin", "Aaron Wise", "Austin Eckroat"] },
  { player: "JB", picks: ["Adam Hadwin", "Aaron Wise", "A.J. Ewart"] },
  { player: "D McCarthy", picks: ["Adam Hadwin", "Austin Eckroat", "A.J. Ewart"] },
  { player: "Nath Ferg", picks: ["Aaron Wise", "Austin Eckroat", "A.J. Ewart"] },

  { player: "Muzza T", picks: ["Ben Kohles", "Ben Martin", "Brice Garnett"] },
  { player: "D Donnelly", picks: ["Ben Kohles", "Ben Martin", "Chandler Phillips"] },
  { player: "Hancock", picks: ["Ben Kohles", "Brice Garnett", "Chandler Phillips"] },
  { player: "B Ashford", picks: ["Ben Martin", "Brice Garnett", "Chandler Phillips"] },

  { player: "Bradley C", picks: ["Zac Blair", "Patton Kizzire", "Kevin Streelman"] },
  { player: "Sloanie", picks: ["Zac Blair", "Patton Kizzire", "Justin Lower"] },
  { player: "R Fowler", picks: ["Zac Blair", "Kevin Streelman", "Justin Lower"] },
  { player: "Sparky", picks: ["Patton Kizzire", "Kevin Streelman", "Justin Lower"] },

  { player: "Barley", picks: ["Scottie Scheffler", "Troy Merritt", "Austin Cook"] },
  { player: "Pete Holly", picks: ["Scottie Scheffler", "Troy Merritt", "Tyler Duncan"] },
  { player: "Timmy S", picks: ["Scottie Scheffler", "Austin Cook", "Tyler Duncan"] },
  { player: "Mr Grant", picks: ["Troy Merritt", "Austin Cook", "Tyler Duncan"] },

  { player: "Greg B", picks: ["Pierceson Coody", "Scottie Scheffler", "Joel Dahmen"] },
  { player: "JD Boy", picks: ["Pierceson Coody", "Scottie Scheffler", "Charley Hoffman"] },
  { player: "Mr Manson", picks: ["Pierceson Coody", "Joel Dahmen", "Charley Hoffman"] },
  { player: "G Ponting", picks: ["Scottie Scheffler", "Joel Dahmen", "Charley Hoffman"] },

  { player: "R McKnight", picks: ["Rasmus Højgaard", "Rico Hoey", "Robert Streb"] },
  { player: "Chalkey", picks: ["Rasmus Højgaard", "Rico Hoey", "Seamus Power"] },
  { player: "Budgie", picks: ["Rasmus Højgaard", "Robert Streb", "Seamus Power"] },
  { player: "Lamming", picks: ["Rico Hoey", "Robert Streb", "Seamus Power"] },

  { player: "A Bull", picks: ["Mackenzie Hughes", "Cam Davis", "Billy Horschel"] },
  { player: "Lynda R", picks: ["Mackenzie Hughes", "Cam Davis", "Haotong Li"] },
  { player: "Cam P", picks: ["Mackenzie Hughes", "Billy Horschel", "Haotong Li"] },
  { player: "Wazza SB", picks: ["Cam Davis", "Billy Horschel", "Haotong Li"] },

  { player: "Mac The Knife", picks: ["Nick Dunlap", "Nick Hardy", "Patrick Rodgers"] },
  { player: "Crusader", picks: ["Nick Dunlap", "Nick Hardy", "Kevin Yu"] },
  { player: "Maccas", picks: ["Nick Dunlap", "Patrick Rodgers", "Kevin Yu"] },
  { player: "Matt B", picks: ["Nick Hardy", "Patrick Rodgers", "Kevin Yu"] },

  { player: "The Wrangler", picks: ["Stephan Jaeger", "Luke List", "Mark Hubbard"] },
  { player: "AD", picks: ["Stephan Jaeger", "Luke List", "Mac Meissner"] },
  { player: "J Turner", picks: ["Stephan Jaeger", "Mark Hubbard", "Mac Meissner"] },
  { player: "M Sanders", picks: ["Luke List", "Mark Hubbard", "Mac Meissner"] },

  { player: "Nick Fitz", picks: ["Danny Willett", "Emiliano Grillo", "Erik van Rooyen"] },
  { player: "M Little", picks: ["Danny Willett", "Emiliano Grillo", "Harry Higgs"] },
  { player: "T Rowe", picks: ["Danny Willett", "Erik van Rooyen", "Harry Higgs"] },
  { player: "J Tilley", picks: ["Emiliano Grillo", "Erik van Rooyen", "Harry Higgs"] },

  { player: "Arnie Palmer", picks: ["Adrien Dumont de Chassart", "Alejandro Tosti", "Alex Huang"] },
  { player: "K. Sanders", picks: ["Adrien Dumont de Chassart", "Alejandro Tosti", "Adam Headley"] },
  { player: "L Adams", picks: ["Adrien Dumont de Chassart", "Alex Huang", "Adam Headley"] },
  { player: "K McGinness", picks: ["Alejandro Tosti", "Alex Huang", "Adam Headley"] },

  { player: "Baylis", picks: ["Johnny Keefer", "Jordan Smith", "John Parry"] },
  { player: "D Tucker", picks: ["Johnny Keefer", "Jordan Smith", "John VanDerLaan"] },
  { player: "Kev Martin", picks: ["Johnny Keefer", "John Parry", "John VanDerLaan"] },
  { player: "P Mac", picks: ["Jordan Smith", "John Parry", "John VanDerLaan"] },

  { player: "J Barbour", picks: ["Vince Whaley", "Will Gordon", "William Mouw"] },
  { player: "P Lund", picks: ["Vince Whaley", "Will Gordon", "Taylor Moore"] },
  { player: "Trump H", picks: ["Vince Whaley", "William Mouw", "Taylor Moore"] },
  { player: "John Edge", picks: ["Will Gordon", "William Mouw", "Taylor Moore"] },

  { player: "Trent W", picks: ["Yongjun Bae", "Zecheng Dou", "Zach Bauchou"] },
  { player: "Sir Steve", picks: ["Yongjun Bae", "Zecheng Dou", "S.Y. Noh"] }
];
