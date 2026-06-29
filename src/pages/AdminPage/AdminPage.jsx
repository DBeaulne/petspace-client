import "./AdminPage.scss";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";

const AdminPage = () => {
	const [applications, setApplications] = useState([]);
	const [error, setError] = useState("");

	const loadApplications = async () => {
		try {
			const response = await api.get("/admin/sitter-applications");
			setApplications(response.data);
			setError("");
		} catch (err) {
			setError(err.response?.data?.message || "Unable to load sitter applications.");
		}
	};

	useEffect(() => {
		loadApplications();
	}, []);

	const updateStatus = async (id, status) => {
		await api.patch(`/admin/sitter-applications/${id}`, { status });
		loadApplications();
	};

	return (
		<section className="admin-page">
			<h2>Admin review</h2>
			{error && <p className="admin-page__error">{error}</p>}
			<div className="admin-page__list">
				{applications.map((application) => (
					<article className="admin-page__card" key={application.id}>
						<div>
							<h3>{application.first_name} {application.last_name}</h3>
							<p>{application.email}</p>
							<p>{application.city}, {application.province} {application.postal_code}</p>
							<p>${Number(application.hourly_rate).toFixed(0)} / hr · {application.service_radius_km} km radius</p>
							<p>{application.accepted_pet_types} · {application.accepted_pet_sizes}</p>
							<p>{application.bio}</p>
							<strong>{application.status}</strong>
						</div>
						<div className="admin-page__actions">
							<button type="button" onClick={() => updateStatus(application.id, "approved")}>Approve</button>
							<button type="button" onClick={() => updateStatus(application.id, "rejected")}>Reject</button>
							<button type="button" onClick={() => updateStatus(application.id, "hidden")}>Hide</button>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default AdminPage;
