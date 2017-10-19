
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(() =>
      // Inserts seed entries
      knex('artists').insert([
        { name: 'Unknown', bio: 'Unidentifiable works of art.', user_id: 1 },
        { name: 'Yoskay & Tati', bio: 'Yoskay Yamamoto (2005 - 2015) he has created over 30 murals, 4 of which are famous in the Austin area, he is also known for his paintings and sculptures.  Tatiana Suarez (2009 - 2014) On both canvas and walls, Suarez’s work is rich with symbols from her Brazilian and El Salvadorian heritage', user_id: 1 },
        { name: 'Nicholas Conrad Miller', bio: 'Known for his large Cisco mural, in collaboration with the Austin Mural Program', user_id: 1 },
        { name: 'Federico', bio: 'Very famous Austin artist', user_id: 1 },
        { name: 'Lucas Aoki', bio: '“I have learned a lot about myself and the magical world of art. I have found that the experience of painting murals and collaborating with other artists have added new elements to my life. There are new challenges and things to learn constantly. Making art can be intimidating at times, but so fun and rewarding”. -Lucas Aoki', user_id: 1 },
        { name: 'David "MEGGS"', bio: "David “MEGGS” Hooke is one of Australia’s most progressive and committed street and fine artists. MEGGS is recognized for his unique, expressive, and energetic style with references to pop-culture, the natural world, and socio-cultural issues. His technical use of color and movement combines clean, bold, illustrative elements with intuitive, textural, and free flowing design. By constantly searching for the harmony between form, abstraction, order, and chaos, MEGGS pours his all-or-nothing personality into every inch of his work. His life manifesto is that the ‘journey is the reward’ and his work reflects his eternal search for balance. MEGGS’ emphasis on constant growth and passion for travel is demonstrated by his continual exploration of artistic techniques and mediums.", user_id: 1 },
      ]));
};
