import React, {useState} from 'react'
import Footer from "./Footer.js";
import Header from "./Header.js";
import SelectableUnit from "./SelectableUnit.js";

export default function MainPage() {
  
  const getLang = () => (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
  
  const json = getLang() === "hi" ? require('../data/hindi.json') : require('../data/english.json');
  
  let citycount = json.total_cities_1_value;
  let cities = [];
  
  for (let idx = 0; idx <= citycount; idx++) {
    let name = json[`compare-tabs_1_city_${idx}_name`];
    let aqi = json[`compare-tabs_1_city_${idx}_aqi`];
    let cigg = json[`compare-tabs_1_city_${idx}_cigg`];
    
    cities[idx] = {
      name: name,
      aqi: aqi,
      cigg: cigg
    }
  }
  
  let filtered = cities.filter(function (el) {
    return el.name != null && true;
  });
  
  let handleCityChange = (e) => setUnit(e.target.value);
  let [unit, setUnit] = useState("Select your city");
  
  return (
    <div>
      <header className="header">
        <Header/>
      </header>
      <main className="flex pt-8 main">
        <div className="article flex flex-col justify-between pt-16 pb-8 m-0 px-32">
          <div className="flex flex-col content-start justify-start">
            <header className="header-1 content-start bg-white-700">
              {json.hero_1_title}
            </header>
            <div className="author text-basic text-left text-gray-600 content-start py-4">
              <p>{json["article-info_1_byline"]}</p>
              <p>{json["article-info_1_date"]}</p>
              <p>
                <a className="hover:underline focus:underline"
                   href={json["article-info_1_category_url"]}>{json["article-info_1_category"]}</a>
              </p>
            </div>
          </div>
          <section className="flex article flex-auto flex-col py-18">
            <img className="img" src={json.hero_1_image} alt="indian guys suffering from polluted air"/>
            <p>
              Автор фото, ... ></p>
            <div className="article pt-10">
              <div className="header-2 pb-8"> {json.p_1_value} </div>
              <p className="author text-basic text-left">
                {json.p_2_value}
                {json.p_3_value}
                {json.p_4_value}
              </p>
            </div>
            <div className="flex flex-col justify-between mt-8 mb-4 bg-gray-100 border border-gray-300">
              <h5 className="header-3 text-base p-4 text-left">
                {json.p_5_value}
              </h5>
              <div className="p-4">
                <select className="w-full border bg-white rounded px-3 py-3 outline-none"
                        onChange={handleCityChange}>
                  <option key="key" value="Select your city"> {json["compare-tabs_1_title"]} </option>
                  
                  {
                    filtered.map((key) => {
                      return <option key={key.name}>{key.name}</option>
                    })
                  }
                </select>
                <SelectableUnit props={filtered.find(el => el.name === unit)}/>
              </div>
            </div>
            <div className="article pt-4">
              <div>
                <p className="header-3 text-bold pb-1">{json.p_6_value}</p>
                <p>{json.p_7_value}</p>
                <p>{json.p_8_value}</p>
                <p>{json.p_9_value}</p>
                <p>{json.p_10_value}</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  )
}