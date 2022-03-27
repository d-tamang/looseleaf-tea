import * as TeaAPIUtil from "../util/tea_api_util";

export const RECEIVE_TEAS = "RECEIVE_TEAS";
export const RECEIVE_TEA = "RECEIVE_TEA";

const receiveTeas = (teas) => ({
  type: RECEIVE_TEAS,
  teas
});

const receiveTea = (tea) => ({
  type: RECEIVE_TEA,
  tea
});

export const fetchTeas = () => dispatch => (
  TeaAPIUtil.fetchTeas()
    .then(fetchedTeas => dispatch(receiveTeas(fetchedTeas)))
);

export const fetchTea = teaId => dispatch => (
  TeaAPIUtil.fetchTea(teaId)
    .then(fetchedTea => dispatch(receiveTea(fetchedTea)))
);