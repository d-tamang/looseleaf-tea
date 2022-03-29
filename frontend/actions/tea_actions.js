import * as TeaAPIUtil from "../util/tea_api_util";

export const RECEIVE_TEAS = "RECEIVE_TEAS";
export const RECEIVE_TEA = "RECEIVE_TEA";

const receiveTeas = (teas) => ({
  type: RECEIVE_TEAS,
  teas
});

const receiveTea = (payload) => ({
  type: RECEIVE_TEA,
  payload
});

export const fetchTeas = () => dispatch => (
  TeaAPIUtil.fetchTeas()
    .then(fetchedTeas => dispatch(receiveTeas(fetchedTeas)))
);

export const fetchTea = teaId => dispatch => (
  TeaAPIUtil.fetchTea(teaId)
    .then(payload => dispatch(receiveTea(payload)))
);