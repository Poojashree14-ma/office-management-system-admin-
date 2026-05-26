from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Employee
from app.schemas import EmployeeCreate

router = APIRouter()


@router.post("/")
def add_employee(emp: EmployeeCreate, db: Session = Depends(get_db)):

    employee = Employee(
        name=emp.name,
        department=emp.department,
        designation=emp.designation,
        email=emp.email
    )

    db.add(employee)
    db.commit()

    return {
        "message": "Employee added"
    }


@router.get("/")
def get_employees(db: Session = Depends(get_db)):

    return db.query(Employee).all()


@router.delete("/{id}")
def delete_employee(id: int, db: Session = Depends(get_db)):

    employee = db.query(Employee).filter(
        Employee.id == id
    ).first()

    db.delete(employee)
    db.commit()

    return {
        "message": "Employee deleted"
    }