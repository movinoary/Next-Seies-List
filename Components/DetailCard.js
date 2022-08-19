import React from "react";
import * as Components from "./index";

const DetailCard = ({ item }) => {
  return (
    <section className="flex w-full justify-between mt-5 flex-wrap">
      <div>
        <Components.ListParagraf
          title="Genres"
          data={item.genres.map(genre => genre.name).join(", ")}
        />
        <Components.ListParagraf
          title="Created by"
          data={item.created_by.map(genre => genre.name).join(", ")}
        />
      </div>
      <div>
        <Components.ListParagraf
          title="Release Date"
          data={item.first_air_date}
        />
        <Components.ListParagraf
          title="Last Episode"
          data={item.last_air_date}
        />
      </div>
      <div>
        <Components.ListParagraf
          title="Total Episode"
          data={item.number_of_episodes}
        />
        <Components.ListParagraf
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
