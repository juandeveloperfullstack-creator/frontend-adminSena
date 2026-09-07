import React, { useEffect, useState } from 'react';
import api from '../api/axios';

function AreaList(){
    const [areas, setAreas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [editingId, setEditingId] = useState(null);

    // Obtener la lista de areas GET /api/areas 

    const fetchAreas = async () => {
        try {
            const response = await api.get('/areas');
            setAreas(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error al cargar las areas', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAreas();
    }, []);

    //Crear o actulizar un area (post/put)
    const handleSumbit = async (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        try {
            if (editingId) {
                //Actualizar
                await api.put(`/areas/${editingId}`, { name });
            } else  {
                //Crear
                await api.post('/areas', { name });
            }
            setName('');
            setEditingId(null);
            fetchAreas(); // Refrescar lista sin recargar la pagina
        } catch (error) {
            console.error('Error al guardar el area:', error);
        }
    };

    // Preparar edicion
    const handleEdit = (area) => {
        setEditingId(area.id);
        setName(area.name);
    };

    // Cancelar edicion 
    const handleCancel = () => {
        setEditingId(null);
        setName('');
    };

    // Eliminar une area

    return(
        <></>
    )
}


export default AreaList;