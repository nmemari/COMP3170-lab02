import Card from "./components/Card";

import "./styles.css";

export function App() {
  return (
    <div className="App">
      <h1 className="news_title">Very Real News Feed</h1>
      <Card
        image=""
        storyTitle="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
        link="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/"
        author="Steve Hanley"
        description="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year."
      />
      <Card
        image=""
        storyTitle="Risikoarm in die Tesla-Aktie investieren: Ein Tesla-ETF soll dies möglich machen"
        link="https://www.finanzen.net/nachricht/etf/tesla-etf-risikoarm-in-die-tesla-aktie-investieren-ein-tesla-etf-soll-dies-moeglich-machen-11021681"
        author="John Doe"
        description="Tesla-Aktie mit starker Kursperformance aber auch starken Schwankungen• Tesla-ETF soll das Volatilitätsrisiko senken• Aufwärtspotenzial ebenfalls begrenztDie Tesla-Aktie"
      />
      <Card
        image=""
        storyTitle="La verdadera deuda nacional de EU puede ser 3 veces mayor a el tamaño de su economía: Elon Musk"
        link="https://www.elfinanciero.com.mx/economia/2022/02/13/la-verdadera-deuda-nacional-de-eu-puede-ser-3-veces-mayor-a-el-tamano-de-su-economia-elon-musk/"
        author="Redacción"
        description="Elon Musk es un programador y magnate empresario sudafricano, con nacionalización canadiense y estadounidense y director general de SpaceX, de Tesla Motors."
      />
      <Card
        image=""
        storyTitle="Polestar fires shots at Tesla and Volkswagen, promises ‘no compromises’ in Super Bowl ad"
        link="https://www.theverge.com/2022/2/13/22932414/polestar-super-bowl-ad-commercial-no-compromises-tesla-volkswagen"
        author="Chaim Gartenberg"
        description="Polestar made its Super Bowl debut with a Polestar 2 commercial that aimed to set the electric car newcomer apart from traditional car companies by taking a shot at the entire concept of flashy car commercials — and at Tesla and Volkswagen, specifically. The 30-second ad, titled “No Compromises” makes a litany of claims for Polestar, promising “No epic voiceovers,” “No empty promises,” and “No hidden agendas.” More pointed claims saw Polestar take a jab at Tesla CEO Elon Musk (“No conquering Mars,”) and Volkswagen (“No dieselgate,”) over soaring shots of the company’s Polestar 2 electric SUV. Polestar is a relatively new player in the electric car space, tied closely to Volvo and (notably) offering the first car that’s entirely powered... Continue reading…"
      />
    </div>
  );
}
