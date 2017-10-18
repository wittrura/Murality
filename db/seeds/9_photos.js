
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/1", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/2", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/3", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/4", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/5", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/6", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/7", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/8", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/9", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/10", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/11", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/12", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/13", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/14", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/15", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/16", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/17", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/18", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/19", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/20", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/21", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/22", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/23", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Hope_Gallery/24", mural_id: 1},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Water_Girl/1", mural_id: 2},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Water_Girl/2", mural_id: 2},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Cisco/1", mural_id: 3},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Cisco/2", mural_id: 3},
        {url: "https://res.cloudinary.com/murality/c_scale,h_300/Cisco/3", mural_id: 3}
      ]);
    });
};
