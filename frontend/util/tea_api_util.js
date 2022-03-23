export const fetchTeas = () => {
  return $.ajax({
      method: "GET",
      url: "/api/teas"
  })
};

export const fetchTea = (TeaId) => {
  return $.ajax({
      method: "GET",
      url: `/api/teas/${TeaId}`
  })
};