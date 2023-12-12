import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusSliceActions } from "../store/fetchstatusSlice";
const FetchItems = () => {
  const FetchStatus = useSelector(store => store.fetchStatus)
  const disptach = useDispatch();
  useEffect(() => {
    disptach(fetchStatusSliceActions.markFetchingStarted())
    if (FetchStatus.fetchDone) return;
    fetch('http://localhost:8080/items ')
      .then(res => res.json())
      .then(({ items }) => {
        disptach(fetchStatusSliceActions.markFetchDone())
        disptach(fetchStatusSliceActions.markFetchingFinished())
        disptach(itemsActions.addInitialItems(items[0]))
      }).catch((error) => console.log(error))
  }, [FetchStatus])
  return <>

  </>
}
export default FetchItems;