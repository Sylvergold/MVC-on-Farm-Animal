const { json } = require('express');
const farmModel = require('../model/farmModel.js');

const register = async(req, res)=>{
    try {
        const {age, name, breed, colour} = req.body;
        let matured = false
        if (age >= 10){
            matured = true
        }
        const animal = await farmModel.create({
            name,
            breed,
            age,
            colour
        });
        res.status(201).json({
            messaage: 'Animal profile created successfully',
            data: animal
        })
    }catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const getAll = async(req, res)=>{
    try {
        const allAnimals = await farmModel.find();
        if(allAnimals.length === 0) {
            return res.status(404).json({
                message: `Database currently empty`
            })
        }else{
            res.status(200).json({
                message: `List of all animals in this database\n the total of: ${allAnimals.length}`,
                data: allAnimals
            })
        }
    }catch (error) {
        res.status(500).json({
            message: erro.message
        })
    }
}
const getOne = async(req, res)=>{
    try {
        const {id} =req.params;
        const animal = await farmModel.findById(id);
        if (!animal) {
            return res.status(404).json({
                message: `Animal with id: ${id} not found`
            })
        }else res.status(200).json({
            message: `Animal found`,
            data: animal
        })
    }catch (error){
        res.status(500).json({
            message: error.message
        })
    }
}

const getAllMatured = async (req, res) => {
    try {
        const maturedAnimals = await farmModel.find({ isMatured: true });
        if (maturedAnimals.length === 0) {
            return res.status(404).json({
                message: `No matured animals found`
            });
        }
        res.status(200).json({
            message: `List of all matured animals in this database\nTotal: ${maturedAnimals.length}`,
            data: maturedAnimals
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

const getAllSold = async (req, res) => {
    try {
        const soldAnimals = await farmModel.find({ isSold: true });
        if (soldAnimals.length === 0) {
            return res.status(404).json({
                message: `No sold animals found`
            });
        }
        res.status(200).json({
            message: `List of all sold animals in this database\nTotal: ${soldAnimals.length}`,
            data: soldAnimals
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

const getAllYetToBeSold = async (req, res) => {
    try {
        const yetToBeSoldAnimals = await farmModel.find({ isSold: false });
        if (yetToBeSoldAnimals.length === 0) {
            return res.status(404).json({
                message: `No animals yet to be sold found`
            });
        }
        res.status(200).json({
            message: `List of all animals yet to be sold in this database\nTotal: ${yetToBeSoldAnimals.length}`,
            data: yetToBeSoldAnimals
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

const deleteAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const animal = await farmModel.findByIdAndDelete(id);
        if (!animal) {
            return res.status(404).json({
                message: `Animal with id: ${id} not found`
            });
        }
        res.status(200).json({
            message: `Animal with id: ${id} deleted successfully`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    register,
    getAll,
    getOne,
    getAllMatured,
    getAllSold,
    getAllYetToBeSold,
    deleteAnimal
}
