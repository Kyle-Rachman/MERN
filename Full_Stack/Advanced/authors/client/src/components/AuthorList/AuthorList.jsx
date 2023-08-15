import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthorList.module.css';
import { Button } from '@mui/material';
import DeleteButton from '../DeleteButton';

const AuthorList = (props) => {
    const {removeFromDOM, authors} = props;

    return (
        <>
            <div>
                <table id={styles.authorList}>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((author, index) => {
                                return (
                                    <tr key = {index}>
                                        <td style={{color: "blueviolet"}}>{author.name}</td>
                                        <td>
                                            <Button variant='outlined' component={Link} to={`/authors/${author._id}/edit`}>Edit</Button>
                                            &nbsp;|&nbsp;
                                            <DeleteButton authorId={author._id} successCallback={() => removeFromDOM(author._id)} />
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AuthorList;