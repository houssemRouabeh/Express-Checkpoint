const checkWorkingHours = (req, res, next) => {
  const currentDate = new Date();

  const day = currentDate.getDay();
  const hour = currentDate.getHours();

  if (day > 5 && hour > 8 && hour < 18) {
    if (req.originalUrl !== "/forbidden") {
      // Redirect to the forbidden page
      return res.redirect("/forbidden");
    }
  }

  next();
};

module.exports = checkWorkingHours;
