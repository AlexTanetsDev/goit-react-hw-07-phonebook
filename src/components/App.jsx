import { GlobalStyles } from "./GlobalStyles";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Wrapper } from "./wrapper.styled";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectError, selectIsloading } from "Redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "Redux/operations";




export const App = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


 
    return (
         <>
           <GlobalStyles />
           <Wrapper>
             <h1>Phonebook</h1>
          <ContactForm />

          <h2>{contacts.length === 0 ? 'Here will be your contacts. Add contacts' : 'Contacts'}</h2>
          {isLoading && !error && <b>Request in progress...</b>}
          {contacts.length > 1 && <Filter /> } 
          {contacts.length !== 0 && <ContactList /> }
           </Wrapper>
         </>
    )
 
};
