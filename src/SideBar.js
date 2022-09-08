
const SideBar = ({ items, handleItemClick }) => {
    
    return ( 
        <div className="side-bar">
            <h1>Bakery</h1>
            <ul className="item-list">
                {items.map(item => (
                    <li className="item" key={ item.id } onClick={ () => handleItemClick(item.id) }>
                        <div>
                            <h3 className="item-name">{ item.name }</h3>
                            <span className="item-cps">cps: { item.cps.toLocaleString('en-US') }</span>
                        </div>
                        <div>
                            <span className="item-cost">cost: { item.cost.toLocaleString('en-US') }</span>
                            <span className="item-level">level: { item.level.toLocaleString('en-US') }</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default SideBar;