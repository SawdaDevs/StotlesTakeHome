export type SearchRecordsRequest = {
  buyerSearch?: string[];
  textSearch?: string;
  limit: number;
  offset: number;
};

export type ProcurementRecord = {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  buyer: {
    id: string;
    name: string;
  };
};
export type Buyer = {
  id: string;
  name: string;
};

export type SearchRecordsResponse = {
  records: ProcurementRecord[];
  endOfResults: boolean;
};

class Api {

  async searchRecords(
    request: SearchRecordsRequest
  ): Promise<SearchRecordsResponse> {
    const response = await fetch("/api/records", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(request),
    });
    return await response.json();
  }

  async getBuyers():Promise<Buyer[]>{
    const response = await fetch("/api/buyers",{
      method: "GET",
      headers: {
        "content-type": "application/json",
      }
    });
    return await response.json();
  }
}

export default Api;
