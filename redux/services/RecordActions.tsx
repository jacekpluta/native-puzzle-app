import axios, { AxiosResponse } from "axios";
import { backendUrl } from "../../constants/BackendUrl";

interface IRecord {
  _id: string;
  username: string;
  record: number;
  createdAt: string;
}

export const CreateRecord = async (
  username: string,
  record: number
): Promise<any> => {
  const resJson = await axios
    .post(`${backendUrl}/api/records`, {
      username,
      record,
    })
    .then((response: AxiosResponse<any>) => {
      const { data } = response;
      if (data.error) {
        const postResponse: IRecord = {
          _id: data._id,
          username: data.username,
          record: data.record,
          createdAt: data.createdAt,
        };
        return postResponse;
      }
      const postResponse: IRecord = {
        _id: data._id,
        username: data.username,
        record: data.record,
        createdAt: data.createdAt,
      };

      return postResponse;
    });
  return resJson;
};

export const GetRecords = async (from: Date, to: Date): Promise<any> => {
  const resJson = await axios
    .post(`${backendUrl}/api/records/date`, {
      from: from,
      to: to,
    })
    .then((response: AxiosResponse<[IRecord]>) => {
      const { data } = response;

      const postResponse: [IRecord] = data;

      return postResponse;
    })
    .catch((err) => {
      console.log(err.message);
      return;
    });
  return resJson;
};
