# Use an official Python runtime as the base image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Copy the backend application and the frontend build files into the container
COPY ./backend /app/backend
COPY ./tattoo-frontend/build /app/tattoo-frontend/build

# Install backend dependencies
RUN pip install --no-cache-dir -r /app/backend/requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME TattooStudio

# Run app.py when the container launches
CMD ["python", "/app/backend/app.py"]