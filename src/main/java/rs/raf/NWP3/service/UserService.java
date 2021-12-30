package rs.raf.NWP3.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import rs.raf.NWP3.model.Permission;
import rs.raf.NWP3.model.User;
import rs.raf.NWP3.repository.PermissionRepository;
import rs.raf.NWP3.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IService<User,Long>, UserDetailsService {
    private final UserRepository userRepository;
    private final PermissionRepository permissionRepository;

    @Autowired
    public UserService(UserRepository userRepository, PermissionRepository permissionRepository) {
        this.userRepository = userRepository;
        this.permissionRepository = permissionRepository;
    }

    @Override
    public <S extends User> S save(S var1) {

//        List<Permission> inDB = permissionRepository.findAllByUser(var1);
//        for(Permission p : inDB){
//            permissionRepository.delete(p);
//        }

        for (Permission permission : var1.getPermissions()) {
            permission.setUser(var1);
        }
        //permissionRepository.saveAll(var1.getPermissions());
        return userRepository.save(var1);
    }

    @Override
    public Optional<User> findById(Long var1) {
        return userRepository.findById(var1);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public void deleteById(Long var1) {
        userRepository.deleteById(var1);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User myUser = this.userRepository.findByEmail(email);
        if(myUser == null) {
            throw new UsernameNotFoundException("User email "+email+" not found");
        }

        return new org.springframework.security.core.userdetails.User(myUser.getEmail(), myUser.getPassword(), new ArrayList<>());

    }

    public List<Permission> findUserPermissionsById(Long userId){
        List<Permission> allPermissions = permissionRepository.findAll();
        List<Permission> resPermissions = new ArrayList<>();
        for(Permission p : allPermissions){
            if(p.getUser().getId().equals(userId)){
                resPermissions.add(p);
            }
        }
        return resPermissions;
    }
}
