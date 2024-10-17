const getHome = (req, res) => {
  res.render("views/layout", {
    data: {
      title: "Home",
    },
  });
};
export { getHome };
