import db from './db';

export default {
  getList: (resource, params) => {
    return db.allDocs({
        include_docs: true,
        attachments: true,
      })
      .then(data => {
        console.log("data", data)
        return { data: data.rows, total: data.total_rows }
      })
  },

  getOne: (resource, params) => {
    return db.get(params.id)
      .then(function(doc) {
        console.log("get response", doc)
        return  { data: doc};
      })
      .catch(function(err) {
        console.log(err);
        return err;
      })
  },

  getMany: (resource, params) => {},

  getManyReference: (resource, params) => {},

  update: (resource, params) => {
    return db.put({
          ...params.data.doc,
          id: params._id,
       }).then(function(response) {
        return { data : response}
      }).catch(function(err) {
        console.log(err);
      })
  },

  updateMany: (resource, params) => {},

  create: (resource, params) => {
    return db.post(params.data).then(function (response) {
      const doc =  { ...params.data, id: response.id }
      console.log("params.data, id: response.id",)
        return { data : doc}
    }).catch(function (err) {
        console.log("handleSuccess create user", err)
    });
  },

  delete: (resource, params) => {},
  deleteMany: (resource, params) => {},
};
