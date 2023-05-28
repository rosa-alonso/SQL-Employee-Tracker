INSERT INTO department (id, name)
VALUES  (1, "Sales"),
        (2, "Engineering"),
        (3, "Finance"),
        (4, "Legal");

INSERT INTO role (id, title, salary, department_id)
VALUES  (1, "sales lead", 100000.00, 1),
        (2, "salesperson", 80000.00, 1),
        (3, "lead engineer", 150000.00, 2),
        (4, "software engineer", 120000.00, 2),
        (5, "account manager", 160000.00, 3),
        (6, "accountant", 125000.00, 3),
        (7, "legal team lead", 250000.00, 4),
        (8, "lawyer", 190000.00, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (1, 'John', 'Doe', 1, 1),
        (2, 'Jack', 'Daniels', 2, NULL),
        (3, 'Jane', 'Doe', 3, 2),
        (4, 'Lane', 'Hicks', 4, NULL),
        (5, 'Allyson', 'Smith', 5, 3),
        (6, 'May', 'Ronaldo', 6, NULL),
        (7, 'Daisy', 'Dukes', 7, 4),
        (8, 'Fred', 'White', 8, NULL);
     
        


