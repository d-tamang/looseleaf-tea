export const fetchTeas = () => {
  return $.ajax({
      method: "GET",
      url: "/api/teas"
  })
};

export const fetchTea = (teaId) => {
  return $.ajax({
      method: "GET",
      url: `/api/teas/${teaId}`
  })
};