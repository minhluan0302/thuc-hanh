const getAbout = (req, res) => {
  res.render("views/layout", {
    data: {
      title: "About",
      page: "about",
    },
  });
};
export { getAbout };
