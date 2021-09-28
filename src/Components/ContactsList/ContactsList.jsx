import { removeContact } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import s from "./ContactsList.module.css";
import Button from "../Button/Button";

function ContactsList() {
  const dispatch = useDispatch();
  const { items, filter } = useSelector((state) => state.contactsReducer);

  const handleRemove = (id) => {
    return dispatch(removeContact(id));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  return (
    <ul className={s.list}>
      {getVisibleContacts().map(({ id, name, number }) => {
        return (
          <li className={s.item} key={id}>
            <p>
              {name}: {number}{" "}
            </p>
            <Button
              type="button"
              handleClick={(e) => {
                handleRemove(e.currentTarget.id);
              }}
              buttonName="Delete"
              id={id}
            />
          </li>
        );
      })}
    </ul>
  );
}
ContactsList.propTypes = {
  contactsList: PropTypes.array,
  handleRemove: PropTypes.func,
};

export default ContactsList;
