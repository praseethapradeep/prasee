package Students.Admission.Details;

public class Student {
	private Long Id;
	private String Name;
	private String Department;
	private Long PhoneNumber;
	
	public Student(Long id, String name, String department, Long phoneNumber) {
		super();
		Id = id;
		Name = name;
		Department = department;
		PhoneNumber = phoneNumber;
	}
	
	
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getDepartment() {
		return Department;
	}
	public void setDepartment(String department) {
		Department = department;
	}
	public Long getPhoneNumber() {
		return PhoneNumber;
	}
	public void setPhoneNumber(Long phoneNumber) {
		PhoneNumber = phoneNumber;
	}
}
