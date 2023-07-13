import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

function App() {

    const [items, setItems] = useState([
        { name: "grandma", cps: 10, cost: 100, level: 1, id: 1 },
        { name: "cookie farm", cps: 50, cost: 1500, level: 1, id: 2 },
        { name: "cookie factory", cps: 300, cost: 20000, level: 1, id: 3 }
    ]);
    const [cookies, setCookies] = useState(0);
    const [cps, setCps] = useState(0);

    const handleItemClick = id => {
        // item na ktery kliknu
        const [currentItem] = items.filter(item => item.id === id);

        // pokud si mohu dovolit koupit
        if (cookies >= currentItem.cost) {
            // nastavim atributy, ktere se maji po koupi zmenit
            setCookies(cookies - currentItem.cost);
            setCps(cps + currentItem.cps);
            currentItem.cost *= 2;
            currentItem.level++;

            // updatuji itemy v obchodu
            const updatedItems = [];

            items.map(item => item.id === id ? updatedItems.push(currentItem) : updatedItems.push(item));

            setItems(prev => prev = updatedItems);
        }
    }

    const handleCookieClick = () => {
        setCookies(prevCookies => prevCookies + 1);
    }

    // kazdou sekundu updatuje susenky, pridava cps
    useEffect(() => {
        const interval = setInterval(() => setCookies(prevCookies => prevCookies + cps), 1000);
        return () => {
            clearInterval(interval);
        }
    }, [cps]);

    return (
        <div className="App">
            aaaaa
            <SideBar items={items} handleItemClick={handleItemClick} />
            <MainContent cookies={cookies} cps={cps} handleCookieClick={handleCookieClick} />
        </div>
    );
}

export default App;
