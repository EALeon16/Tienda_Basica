import './Vista_principal.css'
import { useState } from "react";
function AcordionImagenes ({ items }){
    const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);
    return(
        <section className="image-accordion">
        {items.map((item, index) => {
          const isActive = active === index ? "active" : "";
          return (
            <div
              key={item.image}
              className={`image-accordion-item ${isActive}`}
              onClick={() => handleToggle(index)}
            >
              <img src={item.image} />
              
            </div>
          );
        })}
      </section>
    )

}
export default AcordionImagenes