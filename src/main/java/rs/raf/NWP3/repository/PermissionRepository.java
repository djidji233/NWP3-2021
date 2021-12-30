package rs.raf.NWP3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rs.raf.NWP3.model.Permission;
import rs.raf.NWP3.model.User;

import java.util.List;

public interface PermissionRepository extends JpaRepository<Permission, Long> {
    public List<Permission> findAllByUser(User user);
}
