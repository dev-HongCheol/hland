import { useAppDispatch, useAppSelector } from '@libs/stores';
import mainProductListApi from './mainProductList.api';
import { useQuery } from '@tanstack/react-query';
import { setListOption } from '@libs/stores/product';
import firestoreUtil from '@utils/firestore';
import { Reference, convert, parse } from 'firestore-rest-parser';
import { http } from '@libs/http';
import { ResProducts } from '.';

const useMainProductList = () => {
  const listOption = useAppSelector((state) => state.product.listOption);
  const { fetchProducts } = mainProductListApi();
  const dispatch = useAppDispatch();

  const getProductList = async () => {
    const skip = listOption.limit * (listOption.page - 1);
    const res = await fetchProducts(listOption.limit, skip);

    const resJson = parse(res.documents[0]);
    console.log(resJson);
    // const kyes = Object.keys(resJson);
    // console.log(kyes);
    if (resJson['ref']) {
      console.log('find');
      const refData = await http.get<ResProducts>(`v1/${resJson.ref}/`).then((res) => res.data);
      console.log(refData);
    } else {
      console.log('not find');
    }

    const totalPage = res.total;
    const limitSize = res.limit;

    const maxPage = Math.ceil(totalPage / limitSize);
    dispatch(setListOption({ ...listOption, maxPage }));
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['products', listOption.page, listOption.limit],
    queryFn: getProductList,
  });

  return { data, isLoading };
};

export default useMainProductList;
