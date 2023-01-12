import { useDispatch, useSelector } from "react-redux";
import { ContactItem, List } from "./ContactList.styled";
import { selectContacts } from "Redux/contactsSlice";
import { selectFilter } from "Redux/filterSlice";
import { deleteContact } from "Redux/operations";


export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(deleteContact(id));
    }

    const getVisibleContacts = () => {

    return contacts.filter(contact => contact.contact.name.toLowerCase().includes(filter.toLowerCase())); 


    }
    
    return (
        <List>
            {getVisibleContacts().map(item => {
                const { id, contact} = item;
                const {name, number} = contact;
                return <ContactItem key={id}>
                    <p>{name} : {number}</p>
                    <button type="button" onClick={() => handleClick(id)}>Delete</button>
                </ContactItem>
            })}
        </List>
    )
}
