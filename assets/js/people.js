/**
 * EDIT PEOPLE HERE
 * Set image to a direct remote photo URL (preferred) or a local image path.
 * Profile-page URLs are not images. Remote images update if their URL stays the same;
 * signed CDN links may expire and need replacing. Failed images fall back to initials.
 * Replace url: "" with the person's full https:// webpage URL.
 * Empty URLs display "Webpage forthcoming" instead of a broken or dummy link.
 * Images are cropped to a square; 600 × 600 px or larger is recommended.
 * Initials appear only on the shared placeholder, never over a real photo.
 */
window.FLORES_PEOPLE = {
  speakers: [
    {
      name: "Román Orús",
      affiliation: "Multiverse Computing",
      description: "Model compression and its governance implications.",
      initials: "RO",
      image: "https://www.romanorus.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F6o8v6mfw%2Fproduction%2F9aafa823167504a6501172968d61d3662c0777f8-1728x1383.jpg&w=3840&q=75",
      url: "https://www.romanorus.com",
      color: "teal"
    },
    {
      name: "Helen Yannakoudakis",
      affiliation: "King’s College London",
      description: "Data-efficient learning, model efficiency, and robustness when data and compute are scarce.",
      initials: "HY",
      image: "assets/images/person-placeholder.svg",
      url: "",
      color: "purple"
    }
  ],
  organizers: [
    {
      name: "Jezabel R. Garcia",
      affiliation: "Multiverse Computing",
      initials: "JG",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQEqsafdGsexpQ/profile-displayphoto-crop_800_800/B4EZ9M63DwHMAI-/0/1783701927469?e=1795046400&v=beta&t=p67gUVlF3Nsc_TCbJN2eQOVpj8pW28UKKwG8LW_FAfE",
      imagePosition: "center top",
      url: "https://www.linkedin.com/in/jezabel-r-garcia-496689b6?originalSubdomain=es",
      color: "coral"
    },
    {
      name: "Oscar Sainz",
      affiliation: "HiTZ Center · University of the Basque Country (EHU)",
      initials: "OS",
      image: "https://osainz59.github.io/assets/img/oscar2_0_upscaled_square.jpg",
      url: "https://osainz59.github.io",
      color: "teal"
    },
    {
      name: "Iker García-Ferrero",
      affiliation: "Multiverse Computing",
      initials: "IG",
      image: "https://ikergarcia1996.github.io/images/avatar.jpg",
      url: "https://ikergarcia1996.github.io",
      color: "blue"
    },
    {
      name: "Avyav Kumar Singh",
      affiliation: "King’s College London",
      initials: "AS",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEl9kGKc0mfVg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1670004688592?e=1795046400&v=beta&t=4VAJcSKnt-SewVIdX4Dg9VdqyOs965DxwB7bRTIbCGA",
      url: "https://www.linkedin.com/in/avyav-kumar-singh/",
      color: "purple"
    },
    {
      name: "Jon Ander Campos",
      affiliation: "Cohere",
      initials: "JC",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHAgtXJrFTpDQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1666912802926?e=1795046400&v=beta&t=DxR12eavWjA7kAx20tIRcusVao2_SEnu3WVz9KMn_Fc",
      url: "https://www.linkedin.com/in/jon-ander-campos/?locale=en",
      color: "gold"
    },
    {
      name: "Antonio Tiene",
      affiliation: "Multiverse Computing",
      initials: "AT",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHH6mxEP0zb6Q/profile-displayphoto-crop_800_800/B4EaC1XgM2JQAI-/0/1789749234223?e=1795046400&v=beta&t=zjiZWnrCKDPSNtPmzFaj_16cgeeNrVCGingXXyNm9AQ",
      url: "https://www.linkedin.com/in/antoniotiene/",
      color: "blue"
    },
    {
      name: "Carlos Escolano",
      affiliation: "Universitat Politècnica de Catalunya",
      initials: "CE",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQHQOiVqDo3ngg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1589292020020?e=1795046400&v=beta&t=MjZEYqs86m_Xm4yJueg67jiKeTcO8I4hmxRsy5QQgDY",
      url: "https://www.linkedin.com/in/carlos-escolano-ba26549a/",
      color: "coral"
    },
    {
      name: "German Rigau",
      affiliation: "HiTZ Center · University of the Basque Country (EHU)",
      initials: "GR",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQFKqcVw53rMAQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1556869672305?e=1795046400&v=beta&t=C8YQQw_rtf3lmxlQl2r8V9pfBqtxafgYLK1iFhJCkPk",
      url: "https://web.archive.org/web/20231030120618/https://adimen.si.ehu.es/~rigau/",
      color: "teal"
    }
  ]
};
