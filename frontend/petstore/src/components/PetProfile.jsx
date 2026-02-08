import React from "react";

const PetProfile = ({
  name,
  species,
  id,
  tags,
  status,
  mainImage,
  galleryImages,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        marginBottom: 30,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header section */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <img
            src={mainImage}
            alt={`${name} profile`}
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div>
            <h2 style={{ margin: 0 }}>
              {name} | {species}
            </h2>
            <p style={{ margin: "4px 0", fontSize: 14 }}>
              ID: <strong>{id}</strong>
            </p>
            <p style={{ margin: 0, fontStyle: "italic", fontSize: 13 }}>
              Tags : {tags.join(", ")}
            </p>
          </div>
        </div>

        <div style={{ fontSize: 14 }}>
          Status : <strong>{status}</strong>
        </div>
      </header>

      {/* Gallery of images */}
      <section
        style={{
          display: "flex",
          gap: 15,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {galleryImages.map((imgUrl, i) => (
          <img
            key={i}
            src={imgUrl}
            alt={`${name} gallery ${i + 1}`}
            style={{
              width: 150,
              height: 130,
              borderRadius: 10,
              objectFit: "cover",
            }}
          />
        ))}
      </section>
    </div>
  );
};

export default PetProfile;