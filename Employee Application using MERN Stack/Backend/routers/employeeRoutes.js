const express = require('express');
const Employee = require('../models/Employee');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

// Read all Employees
router.get('/', authMiddleware, async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create an Employee (Admin only)
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  const { name, email, position, salary } = req.body;

  try {
    const newEmployee = new Employee({ name, email, position, salary });
    await newEmployee.save();
    res.json(newEmployee);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update an Employee (Admin only)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const { name, email, position, salary } = req.body;

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, { name, email, position, salary }, { new: true });
    if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });
    res.json(updatedEmployee);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete an Employee (Admin only)
router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
