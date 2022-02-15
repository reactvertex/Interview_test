import React from 'react';
import { TableContent } from './styleComponents';
import deleteIcon from '../../assests/delete.png';
import edit from '../../assests/edit.png';

function ContactTable({ contact,handleUpdate,handleDelete }) {

    return (
        <TableContent>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Type</th>
                        <th scope="col">Whatapps</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contact.map((val,index) => (
                        <tr className='border-0' key={index}>
                            <th scope="row" >{index + 1}</th>
                            <td>{val.name}</td>
                            <td>{val.phone}</td>
                            <td>{val.contactTypes}</td>
                            <td>{val.isWhatsapp ? "Yes" : "No"}</td>
                            <td>
                                <img height='15px' width='15px' src={edit} alt='editIcon' className='action_button' onClick={() =>handleUpdate(val, index)}/>
                                <img height='15px' width='15px' src={deleteIcon} alt='deleteIcon' className='mx-3 action_button' onClick={() =>handleDelete(val, index)}/>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </TableContent>
    )
}

export default ContactTable;