export const selectLoading = state => state.contacts.loading;

export const selectFilter = state => state.contacts.filter;

export const selectAllContacts = state => state.contacts.items;

export const getContacts = state => {
    return state.contacts.items;
  };
  
  export const getFilter = state => {
    return state.contacts.filter;
  };