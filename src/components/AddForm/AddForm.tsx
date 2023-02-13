import React, {SyntheticEvent, useState} from 'react';
import {Btn} from "../common/Btn";
import {geocode} from "../../utils/geocoding";
import {apiUrl} from "../../config/api";
import './AddForm.css';
export const AddForm = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');

    const [form, setForm] = useState({
        name: '',
        description: '',
        price: '',
        url: '',
        address: '',
    });
    const saveAd = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const {lat, lon} = await geocode(form.address);
            const res = await fetch(`${apiUrl}/ad`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    lat,
                    lon,
                }),
            });
            const data = await res.json();
            setId(data.id);
        } finally {
            setLoading(false);
        }
    };
    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };
    if (loading) {
        return <h2>Advertisement is being added...</h2>;
    }
    if (id) {
        return <h2>Your ad "{form.name}" has been successfully added to the site under the ID: {id}.</h2>;
    }
    return (
        <form action="" className="add-form" onSubmit={saveAd}>
            <h1>Adding an advertisement</h1>
            <p>
                <label>
                    Name: <br/>
                    <input
                        type="text"
                        name="name"
                        required
                        maxLength={99}
                        value={form.name}
                        onChange={e => updateForm('name', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Description: <br/>
                    <textarea
                        name="description"
                        maxLength={999}
                        value={form.description}
                        onChange={e => updateForm('description', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Cena: <br/>
                    <input
                        type="number"
                        name="price"
                        required
                        maxLength={99}
                        value={form.price}
                        onChange={e => updateForm('price', Number(e.target.value))}
                    /> <br/>
                    <small>Leave a zero in the field to not display the price.</small>
                </label>
            </p>
            <p>
                <label>
                    URL: <br/>
                    <input
                        type="url"
                        name="url"
                        maxLength={99}
                        value={form.url}
                        onChange={e => updateForm('url', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    The physical address on the map: <br/>
                    <input
                        type="text"
                        name="address"
                        required
                        value={form.address}
                        onChange={e => updateForm('address', e.target.value)}
                    />
                </label>
            </p>
            <Btn text="Save"/>
        </form>
    );
}