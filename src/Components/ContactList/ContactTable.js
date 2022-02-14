import React from 'react';
import { TableContent } from './styleComponents';

function ContactTable({ contact }) {

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
                            <td><butto>Edit</butto></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </TableContent>
    )
}

export default ContactTable;