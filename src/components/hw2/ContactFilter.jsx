export const ContactFilter = ({ contacts, onUpdateName }) => {
  return (
    <>
      <h2>Contacts</h2>
      <label htmlFor="contactsFilter">
        <p>Find contacts by name</p>
        <input
          type="text"
          placeholder="Contact name"
          name="contactsFilter"
          value={contacts.name}
          onChange={(event) => {
            return onUpdateName(event.target.value)
          }}
        />
      </label>
    </>
  );
};
