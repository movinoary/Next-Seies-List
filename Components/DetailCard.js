import React from "react";
import ListParagraf from "./Sub/ListParagraf";

const DetailCard = ({ item }) => {
  return (
    <section className="flex w-full justify-between mt-5 flex-wrap">
      <div>
        <ListParagraf
          title="Genres"
          data={item.genres.map(genre => genre.name).join(", ")}
        />
        <ListParagraf
          title="Created by"
          data={item.created_by.map(genre => genre.name).join(", ")}
        />
      </div>
      <div>
        <ListParagraf title="Release Date" data={item.first_air_date} />
        <ListParagraf title="Last Episode" data={item.last_air_date} />
      </div>
      <div>
        <ListParagraf title="Total Episode" data={item.number_of_episodes} />
        <ListParagraf
          title="Language"
          data={item.spoken_languages
            .map(genre => genre.english_name)
            .join(", ")}
        />
      </div>
    </section>
  );
};

export default DetailCard;
