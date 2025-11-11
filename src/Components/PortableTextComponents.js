import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import { PortableText } from "@portabletext/react";
import "./SlugPage/SlugPage.css"
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export const portableTextComponents = {
  types: {
    // 🖼️ Image Renderer
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const imageUrl = urlFor(value).url();
      const href = value.link || null;

      return (
        <div className="portableImg">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              <img
                src={imageUrl}
                alt={value.alt || "img"}
                width={2000}
                height={1000}
                className="rounded-lg object-cover"
              />
            </a>
          ) : (
            <img
              src={imageUrl}
              alt={value.alt || "img"}
              width={1400}
              height={900}
              className="rounded-lg object-cover"
            />
          )}
        </div>
      );
    },

    // 📊 Custom Table Renderer
    customTable: ({ value }) => {
      if (!value?.rows || !value?.headers) return null;
      return (
        <div className="custom-table">
          {value.title && <h3>{value.title}</h3>}
          <table className="customTable-table">
            <thead>
              <tr>
                {value.headers.map((header, idx) => (
                  <th key={idx}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {value.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.cells.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },

    // 🔽 Accordion Renderer
    accordionBlock: ({ value }) => {
      if (!value?.content) return null;
      return (
        <details className="accordion-item">
          <summary className="accordion-title">
            <h3>{value.title}</h3>
          </summary>
          <div className="accordion-content">
            <PortableText
              value={value.content}
              components={portableTextComponents}
            />
          </div>
        </details>
      );
    },

    // 💬 FAQ Renderer
    faq: ({ value }) => {
      if (!value?.items?.length) return null;
      return (
        <div className="faq-section">
          {value.title && <h2 className="faq-title">{value.title}</h2>}
          <div className="accordion-items">
            {value.items.map((item, idx) => (
              <details key={idx} className="faq-item">
                <summary className="faq-question">{item.question}</summary>
                <div className="faq-answer">
                  <PortableText
                    value={item.answer}
                    components={portableTextComponents}
                  />
                </div>
              </details>
            ))}
          </div>
        </div>
      );
    },
  },
};
