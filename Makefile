PY = python3
MANAGE = manage.py


PM = $(PY) $(MANAGE)

run:
	# make run [port={PORT}]
	$(PM) runserver $(port)

migrations:
	# make migrations [app={APP_NAME}]
	$(PM) makemigrations $(app)

migrate:
	# make migrate
	$(PM) migrate

superuser:
	# make superuser
	$(PM) createsuperuser

startapp:
	# make startapp app={APP_NAME}
	$(PM) startapp $(app)

requirements:
	# make requirements
	pip3 install -r requirements.txt